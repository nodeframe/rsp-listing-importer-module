import { IListingModel } from "../model/listing";
import Promise = require('bluebird');
export declare abstract class ListingImporter {
    dataMapperKlass: any;
    gateway: any;
    db_connection: any;
    abstract beginImport(): void;
    source_type: string;
    updateGeocode(listing: IListingModel): Promise<{}>;
    inActiveListings(): Promise<any>;
}
