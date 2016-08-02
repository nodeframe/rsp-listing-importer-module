import mongoose = require("mongoose");
import {IListing, ListingSchema} from '../schema/IListing';
import Promise = require('bluebird');

ListingSchema.static("createFromJSON", function (json:any, source:string) {

});

ListingSchema.virtual('address.full').get(function () {
  var add = [this.address.street,
    this.address.unit_number,
    this.address.city,
    this.address.state,
    this.address.postal_code,
    this.address.country];
  add = add.filter(function (v) {
    return v
  });
  return add.join(', ');
});


interface IListingModel extends IListing, mongoose.Document, MongoosePromisified {
  createFromJSON(json:any, source:string):IListingModel;
  address:{
    street:string,
    unit_number:string,
    city:string,
    state:string,
    postal_code:string,
    country:string,
    additional_address:any,
    full:string
  }
}

export interface MongoosePromisified {
  updateAsync<T>(doc:Object, options?:Object):Promise<T>;
  updateAsync<T>(cond:Object, update:Object, options:Object):Promise<T>;
  saveAsync<T>(callback?:(err:any, res:T) => void):Promise<T>;
}

export {IListingModel};


 