import config from './config';
import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import {IListingModel} from './model/listing';
import {ListingSchema} from "./schema/IListing";

var db_config = (process.env.NODE_ENV === 'production') ? config.database.production : config.database.dev;

Promise.promisifyAll(mongoose);

export interface IDatabaseHostConfig {
  host:string;
  db_user?:string;
  db_password?:string;
  collection:string;
  port:string;
}

export class Database {
  private db:mongoose.Connection;
  public Listing:mongoose.Model<IListingModel>;
  constructor(private config:IDatabaseHostConfig = db_config){
    this.connect();
  }

  public connect() {
    var uri:string = `mongodb://${this.config.host}:${this.config.port}/${this.config.collection}`;
    this.db = mongoose.createConnection(uri);
    this.createModel();
  }

  private createModel(){
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
    this.Listing = this.db.model<IListingModel>("Listing", ListingSchema);
  }

  public get connection(){
    return this.db;
  }

  public disconnect() {
    this.db.close();
  }
}
