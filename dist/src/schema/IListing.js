"use strict";
var mongoose_1 = require('mongoose');
var ListingSchema = new mongoose_1.Schema({
    address: {
        street: String,
        unit_number: String,
        city: String,
        state: String,
        postal_code: String,
        country: String,
        additional_address: mongoose_1.Schema.Types.Mixed
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
    source_participants: [mongoose_1.Schema.Types.Mixed],
    provider: {
        name: String,
        url: String,
        category: String,
        email: String
    },
    location_type: String,
    additional_location: mongoose_1.Schema.Types.Mixed,
    additional_detail: {
        mls_id: String,
        mls_name: String,
        mls_number: String,
        listing_url: String,
        broker_offices: [mongoose_1.Schema.Types.Mixed]
    },
    pet_allowed: [String],
    status: String,
    last_updated: Date
});
exports.ListingSchema = ListingSchema;

//# sourceMappingURL=IListing.js.map
