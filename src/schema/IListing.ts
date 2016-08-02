import {Schema} from 'mongoose';
import Promise = require('bluebird');

interface IListing {
  address: {
    street: string,
    unit_number: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    additional_address: any
  },
  show_address: boolean,
  price: {
    value: number,
    security_class: string,
    period: string
  },
  area: number,
  neighborhood: [string],// deprecated
  description: string,
  amenities: [string],
  property_features: {
    appliances: [string],
    cooling_systems: [string],
    heating_systems: [string],
    parking_space: number,
    other: [string]

  },
  rooms: [string],
  bathrooms: number,
  bedrooms: number,
  images: [{
    timestamp: Date,
    url: string,
  }],
  location: {
    lat: number,
    lon: number,
  },
  property_type: [string],
  source_type: string,
  source_key: string,
  source_category: string,
  source_status: string,
  source_participants: [any],
  provider: {
    name: string,
    url: string,
    category: string,
    email: string
  },
  location_type: string,
  additional_location: any,
  additional_detail: {
    mls_id: string,
    mls_name: string,
    mls_number: string,
    listing_url: string,
    broker_offices: [any]
  }
  pet_allowed: [string],
  status: string,
}
var ListingSchema = new Schema({
  address: {
    street: String,
    unit_number: String,
    city: String,
    state: String,
    postal_code: String,
    country: String,
    additional_address: Schema.Types.Mixed
  },
  show_address: Boolean,
  price: {
    value: Number,
    security_class: String,
    period: String
  },
  area: Number,
  neighborhood: [String],
  description: String,
  amenities: [String],
  property_features: {
    appliances: [String],
    cooling_systems: [String],
    heating_systems: [String],
    parking_space: Number,
    other: [String]
  },
  rooms: [String],
  bathrooms: Number,
  bedrooms: Number,
  images: [{
    timestamp: Date,
    url: String
  }],
  location: {
    lat: Number,
    lon: Number,
  },
  property_type: [String],
  source_type: String,
  source_key: String,
  source_category: String,
  source_status: String,
  source_participants: [Schema.Types.Mixed],
  provider: {
    name: String,
    url: String,
    category: String,
    email: String

  },
  location_type: String,
  additional_location: Schema.Types.Mixed,
  additional_detail: {
    mls_id: String,
    mls_name: String,
    mls_number: String,
    listing_url: String,
    broker_offices: [Schema.Types.Mixed]
  },
  pet_allowed: [String],
  status: String
});


export {IListing, ListingSchema} ;