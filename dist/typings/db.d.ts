import * as mongoose from 'mongoose';
import { IListingModel } from './model/listing';
export interface IDatabaseHostConfig {
    host: string;
    db_user?: string;
    db_password?: string;
    collection: string;
    port: string;
}
export default class Database {
    private config;
    private db;
    Listing: mongoose.Model<IListingModel>;
    constructor(config?: IDatabaseHostConfig);
    connect(): void;
    private createModel();
    connection: mongoose.Connection;
    disconnect(): void;
}
