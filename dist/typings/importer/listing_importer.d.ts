import { IListingModel } from "../model/listing";
import Promise = require('bluebird');
export interface IGooglemapConfig {
    key: string;
    stagger_time: number;
    encode_polylines: boolean;
}
export declare abstract class ListingImporter {
    dataMapperKlass: any;
    gateway: any;
    db_connection: any;
    gmap_conf: IGooglemapConfig;
    source_type: string;
    abstract beginImport(): void;
    updateGeocode(listing: IListingModel): Promise<{}>;
    inActiveListings(): Promise<any>;
}
