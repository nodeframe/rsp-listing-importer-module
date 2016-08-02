"use strict";
var config_1 = require('./config');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var IListing_1 = require("./schema/IListing");
var db_config = (process.env.NODE_ENV === 'production') ? config_1.default.database.production : config_1.default.database.dev;
Promise.promisifyAll(mongoose);
var Database = (function () {
    function Database(config) {
        if (config === void 0) { config = db_config; }
        this.config = config;
        this.connect();
    }
    Database.prototype.connect = function () {
        var uri = "mongodb://" + this.config.host + ":" + this.config.port + "/" + this.config.collection;
        this.db = mongoose.createConnection(uri);
        this.createModel();
    };
    Database.prototype.createModel = function () {
        this.Listing = this.db.model("Listing", IListing_1.ListingSchema);
    };
    Object.defineProperty(Database.prototype, "connection", {
        get: function () {
            return this.db;
        },
        enumerable: true,
        configurable: true
    });
    Database.prototype.disconnect = function () {
        this.db.close();
    };
    return Database;
}());
exports.Database = Database;

//# sourceMappingURL=db.js.map
