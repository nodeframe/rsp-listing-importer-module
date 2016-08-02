"use strict";
var config_1 = require('./config');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var db_config = config_1.default.database;
var host = db_config.host;
var collection = db_config.collection;
var uri = "mongodb://" + host + ":27017/" + collection;
Promise.promisifyAll(mongoose);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    startConnection: function () {
        mongoose.connect(uri);
        var db = mongoose.connection;
        db.on('connected', function () {
            console.log('Mongoose default connection open to ' + uri);
        });
        db.on('error', console.error.bind(console, 'connection error:'));
    }
};

//# sourceMappingURL=db.js.map
