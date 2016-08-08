import { IListingModel } from "../model/listing";
import Promise = require('bluebird');
export declare abstract class ListingImporter {
    dataMapperKlass: any;
    gateway: any;
    db_connection: any;
    gmap_conf: string;
    source_type: string;
    abstract beginImport(): void;
    updateGeocode(listing: IListingModel): Promise<{}>;
    inActiveListings(): Promise<any>;
}
