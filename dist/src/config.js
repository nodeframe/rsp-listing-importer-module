"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    database: {
        dev: {
            host: "127.0.0.1",
            db_user: "",
            db_password: "",
            collection: 'listings',
            port: "28017"
        },
        test: {
            host: "127.0.0.1",
            db_user: "",
            db_password: "",
            collection: 'listings_test',
            port: "27017"
        },
        production: {
            host: "127.0.0.1",
            db_user: "",
            db_password: "",
            collection: 'listings',
            port: "27017"
        }
    },
    googlemap: {
        key: 'AIzaSyDadzdg1rkwi-k6nGTuKgYLpB1ci3uM1wI',
        stagger_time: 1000,
        encode_polylines: false,
    }
};

//# sourceMappingURL=config.js.map
