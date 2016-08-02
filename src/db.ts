import config from './config';
const mongoose = require('mongoose');
const Promise = require('bluebird');

var db_config = config.database;
var host = db_config.host;
var collection = db_config.collection;
var uri = `mongodb://${host}:27017/${collection}`;

Promise.promisifyAll(mongoose);

export default {
  startConnection: function(){
    mongoose.connect(uri);
    var db = mongoose.connection;
    db.on('connected', ()=>{
      console.log('Mongoose default connection open to ' + uri);
    });
    db.on('error', console.error.bind(console, 'connection error:'));
  }
};