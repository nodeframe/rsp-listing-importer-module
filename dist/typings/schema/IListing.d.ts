import { Schema } from 'mongoose';
interface IListing {
    address: {
        street: string;
        unit_number: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
        additional_address: any;
    };
    show_address: boolean;
    price: {
        value: number;
        security_class: string;
        period: string;
    };
    area: number;
    neighborhood: [string];
    description: string;
    amenities: [string];
    property_features: {
        appliances: [string];
        cooling_systems: [string];
        heating_systems: [string];
        parking_space: number;
        other: [string];
    };
    rooms: [string];
    bathrooms: number;
    bedrooms: number;
    images: [{
        timestamp: Date;
        url: string;
    }];
    location: {
        lat: number;
        lon: number;
    };
    property_type: [string];
    source_type: string;
    source_key: string;
    source_category: string;
    source_status: string;
    source_participants: [any];
    provider: {
        name: string;
        url: string;
        category: string;
        email: string;
    };
    location_type: string;
    additional_location: any;
    additional_detail: {
        mls_id: string;
        mls_name: string;
        mls_number: string;
        listing_url: string;
        broker_offices: [any];
    };
    pet_allowed: [string];
    status: string;
    last_updated: Date;
}
declare var ListingSchema: Schema;
export { IListing, ListingSchema };
