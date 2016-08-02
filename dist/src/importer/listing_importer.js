"use strict";
var GoogleMapsAPI = require('googlemaps');
var config_1 = require("./../config");
var Promise = require('bluebird');
var ListingImporter = (function () {
    function ListingImporter() {
    }
    ListingImporter.prototype.updateGeocode = function (listing) {
        return new Promise(function (resolve, reject) {
            var gmAPI = new GoogleMapsAPI(config_1.default.googlemap);
            var maps_params = { address: listing.address.full };
            gmAPI.geocode(maps_params, function (err, result_set) {
                if (err) {
                    console.log('ERROR: ' + JSON.stringify(err, null, '  '));
                    reject(err);
                }
                else {
                    var result;
                    if (result_set.status === 'OK') {
                        if (result_set.results.length > 1) {
                            result = result_set.results[0];
                        }
                        else if (result_set.results.length == 1) {
                            result = result_set.results[0];
                        }
                        else {
                            reject("GoogleMapsAPI return unexpected results set with " + result_set.results.length + " member");
                        }
                    }
                    else if (result_set.status === 'ZERO_RESULTS') {
                        return reject("GoogleMapsAPI return zero results by using maps_params:" + JSON.stringify(maps_params));
                    }
                    else {
                        return reject(JSON.stringify(result_set, null, '  '));
                    }
                    listing.address.additional_address = result.address_components;
                    var geo = result.geometry;
                    var location = {};
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
    };
    ListingImporter.prototype.inActiveListings = function () {
        return this.db_connection.Listing.updateAsync({
            status: 'active',
            source_type: this.source_type
        }, {
            $set: { status: 'inactive' }
        }, {
            multi: true
        });
    };
    return ListingImporter;
}());
exports.ListingImporter = ListingImporter;

//# sourceMappingURL=listing_importer.js.map
