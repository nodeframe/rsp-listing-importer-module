import * as chai from 'chai';
const expect = chai.expect;

import {Database} from '../src/db';

describe('Test database connect', ()=> {
  it("should connect properly", ()=> {
    var db = new Database();
    var ls = new db.Listing({
      address: {
        street: "2245 Don Knotts Blvd.",
        unit_number: "2",
        city: "Morgantown",
        state: "WV",
        postal_code: "26501",
        country: "true"
      },
      show_address: "true",
      price: {
        value: "234000",
        security_class: "Public",
        period: undefined
      },
      area: '2200',
      neighborhood: ["Downtown", "Industrial"],
      description: "Fabulous home in terrific condition. Beautiful hard wood floors. Great place to raise a family.\n      etc...\n    ",
      amenities: [ "elevator", "gated_entry", "hot_tub_spa", "pool", "sauna", "sports_court"],
      property_features: {
        appliances: ['dishwasher'],
        cooling_systems: ['Central A/C', 'Solar A/C-Passive'],
        heating_systems: ["Forced Air", "Floor Wall"],
        parking_space: '1',
        other: []
      },
      rooms: [
        "Bedroom",
        "Bedroom",
        "Bedroom",
        "Full Bath",
        "Full Bath",
        "Half Bath",
        "Half Bath",
        "Theatre"
      ],
      bedrooms: "3",
      bathrooms: "8",
      images: [{
        timestamp: new Date("2012-03-06T17:14:47-05:00"),
        url: "http://photos.listhub.com/listing123/1"
      }],
      location: {
        lat: "39.231",
        lon: "-89.9383"
      },
      property_type: ['house', 'other', 'apartment'],
      source_type: 'listhub',
      source_key: "3yd-SOMEMLS-1234567890",
      source_category: 'Purchase',
      source_status: 'Expired',
      source_participants: [{
        key: "3yd-A2SELL-12345",
        id: "12345",
        first_name: "John",
        last_name: "Doe",
        role: "Listing",
        phone: "555555lead",
        alternative_phone: "555555555",
        email: "l.0.null.null.2@leads.listhub.net",
        fax: "555-555-5555",
        url: "http://www.somemls.com/agents/12345"
      }, {
        key: "3yd-A2SELL-12346",
        id: "12346",
        first_name: "John2",
        last_name: "Doe2",
        role: "Listing",
        phone: "555555lead",
        alternative_phone: "555555555",
        email: "l.0.null.null.2@leads.listhub.net",
        fax: "555-555-5555",
        url: "http://www.somemls.com/agents/12345"
      }],
      provider: {
        name: 'SomeMLS',
        url: 'http://www.somemls.com',
        category: 'MLS',
        email: 'agent.lead.email@listhub.net'

      },
      additional_detail: {
        mls_id: 'JERICOLALA21122',
        mls_name: 'Listing Exchange Group',
        mls_number: '1234567890',
        listing_url: 'http://www.somemls.com/lisings/1234567890',
        broker_offices: [{
          key: '3yd-A2SELL-OC1',
          id: 'OC1',
          "name": "Preview Listing Office",
          "coperate_name": "Preview Listing Office",
          "broker_id": 'br0ker1d',
          "phone": '555-555-555',
          "website": 'http://www.listoffice.com',
          "address": {
            "street": "2245 Don Knotts Blvd.",
            "unit_number": "2",
            "city": "Morgantown",
            "state": "WV",
            "postal_code": "26501",
            "country": "USA"
          }
        },
          {
            key: '3yd-A2SELL-OC1',
            id: 'OC1',
            "name": "Preview Listing Office",
            "coperate_name": "Preview Listing Office",
            "broker_id": 'br0ker1d',
            "phone": '555-555-555',
            "website": 'http://www.listoffice.com',
            "address": {
              "street": "2245 Don Knotts Blvd.",
              "unit_number": "2",
              "city": "Morgantown",
              "state": "WV",
              "postal_code": "26501",
              "country": "USA"
            }
          }]
      },
      pet_allowed: undefined,
      status: 'active'
    });
    ls.saveAsync().then(()=>{
      // db.disconnect();
    });
  });

  xit("should be able to run full() method on address", () => {
    var db = new Database();
    var ls = new db.Listing({
      address: {
        street: "2245 Don Knotts Blvd.",
        unit_number: "2",
        city: "Morgantown",
        state: "WV",
        postal_code: "26501",
        country: "true"
      },
      show_address: "true",
      price: {
        value: "234000",
        security_class: "Public",
        period: undefined
      },
      area: '2200',
      neighborhood: ["Downtown", "Industrial"],
      description: "Fabulous home in terrific condition. Beautiful hard wood floors. Great place to raise a family.\n      etc...\n    ",
      amenities: [ "elevator", "gated_entry", "hot_tub_spa", "pool", "sauna", "sports_court"],
      property_features: {
        appliances: ['dishwasher'],
        cooling_systems: ['Central A/C', 'Solar A/C-Passive'],
        heating_systems: ["Forced Air", "Floor Wall"],
        parking_space: '1',
        other: []
      },
      rooms: [
        "Bedroom",
        "Bedroom",
        "Bedroom",
        "Full Bath",
        "Full Bath",
        "Half Bath",
        "Half Bath",
        "Theatre"
      ],
      bedrooms: "3",
      bathrooms: "8",
      images: [{
        timestamp: new Date("2012-03-06T17:14:47-05:00"),
        url: "http://photos.listhub.com/listing123/1"
      }],
      location: {
        lat: "39.231",
        lon: "-89.9383"
      },
      property_type: ['house', 'other', 'apartment'],
      source_type: 'listhub',
      source_key: "3yd-SOMEMLS-1234567890",
      source_category: 'Purchase',
      source_status: 'Expired',
      source_participants: [{
        key: "3yd-A2SELL-12345",
        id: "12345",
        first_name: "John",
        last_name: "Doe",
        role: "Listing",
        phone: "555555lead",
        alternative_phone: "555555555",
        email: "l.0.null.null.2@leads.listhub.net",
        fax: "555-555-5555",
        url: "http://www.somemls.com/agents/12345"
      }, {
        key: "3yd-A2SELL-12346",
        id: "12346",
        first_name: "John2",
        last_name: "Doe2",
        role: "Listing",
        phone: "555555lead",
        alternative_phone: "555555555",
        email: "l.0.null.null.2@leads.listhub.net",
        fax: "555-555-5555",
        url: "http://www.somemls.com/agents/12345"
      }],
      provider: {
        name: 'SomeMLS',
        url: 'http://www.somemls.com',
        category: 'MLS',
        email: 'agent.lead.email@listhub.net'

      },
      additional_detail: {
        mls_id: 'JERICOLALA21122',
        mls_name: 'Listing Exchange Group',
        mls_number: '1234567890',
        listing_url: 'http://www.somemls.com/lisings/1234567890',
        broker_offices: [{
          key: '3yd-A2SELL-OC1',
          id: 'OC1',
          "name": "Preview Listing Office",
          "coperate_name": "Preview Listing Office",
          "broker_id": 'br0ker1d',
          "phone": '555-555-555',
          "website": 'http://www.listoffice.com',
          "address": {
            "street": "2245 Don Knotts Blvd.",
            "unit_number": "2",
            "city": "Morgantown",
            "state": "WV",
            "postal_code": "26501",
            "country": "USA"
          }
        },
          {
            key: '3yd-A2SELL-OC1',
            id: 'OC1',
            "name": "Preview Listing Office",
            "coperate_name": "Preview Listing Office",
            "broker_id": 'br0ker1d',
            "phone": '555-555-555',
            "website": 'http://www.listoffice.com',
            "address": {
              "street": "2245 Don Knotts Blvd.",
              "unit_number": "2",
              "city": "Morgantown",
              "state": "WV",
              "postal_code": "26501",
              "country": "USA"
            }
          }]
      },
      pet_allowed: undefined,
      status: 'active'
    });
    expect(ls.address.full).to.equal("2245 Don Knotts Blvd., 2, Morgantown, WV, 26501, true");
  })
});
