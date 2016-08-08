import {IListingModel} from "../model/listing";
const GoogleMapsAPI = require('googlemaps');
import Promise = require('bluebird');

export interface IGooglemapConfig {
  key: string;
  stagger_time: number;
  encode_polylines: boolean;
}
export abstract class ListingImporter {
  dataMapperKlass:any;
  gateway:any;
  db_connection:any;
  gmap_conf:IGooglemapConfig;
  source_type:string;

  abstract beginImport():void;

  updateGeocode(listing:IListingModel) {
    return new Promise((resolve, reject) => {
      var gmAPI = new GoogleMapsAPI(this.gmap_conf);
      var maps_params = {address: listing.address.full};
      gmAPI.geocode(maps_params, (err, result_set) => {
        if (err) {
          console.log('ERROR: ' + JSON.stringify(err, null, '  '));
          reject(err);
        } else {
          var result:any;
          if(result_set.status === 'OK'){
            if (result_set.results.length > 1) {
              /* this should be due to some error
               if the results is more than one, it might be due to the
               sent address is quite ambiguous
               */
              // for now solve it by picking the first one
              result = result_set.results[0];
            } else if (result_set.results.length == 1) {
              // this is the most case
              result = result_set.results[0];
            } else {
              // this is due to some error is occour, the result return nothing
              reject(`GoogleMapsAPI return unexpected results set with ${result_set.results.length} member`);
            }
          } else if(result_set.status === 'ZERO_RESULTS') {
            return reject(`GoogleMapsAPI return zero results by using maps_params:${JSON.stringify(maps_params)}`);
          } else {
            return reject(JSON.stringify(result_set, null, '  '));
          }
          listing.address.additional_address = result.address_components;
          var geo:any = result.geometry;
          var location:any = {};
          location.lat = geo.location.lat;
          location.lon = geo.location.lng;
          delete geo.location;
          delete geo.location_type;
          listing.location = location;
          listing.location_type = geo.location_type;
          listing.additional_location = geo;
          resolve(listing);
        }
      });
    });

  }

  inActiveListings():Promise<any> {
    return this.db_connection.Listing.updateAsync({
      status: 'active',
      source_type: this.source_type
    }, {
      $set: {status: 'inactive'}
    }, {
      multi: true
    });
  }
}