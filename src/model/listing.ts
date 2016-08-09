import mongoose = require("mongoose");
import {IListing} from '../schema/IListing';
import Promise = require('bluebird');


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


 