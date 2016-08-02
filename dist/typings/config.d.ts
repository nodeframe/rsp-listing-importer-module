declare var _default: {
    database: {
        dev: {
            host: string;
            db_user: string;
            db_password: string;
            collection: string;
            port: string;
        };
        test: {
            host: string;
            db_user: string;
            db_password: string;
            collection: string;
            port: string;
        };
        production: {
            host: string;
            db_user: string;
            db_password: string;
            collection: string;
            port: string;
        };
    };
    googlemap: {
        key: string;
        stagger_time: number;
        encode_polylines: boolean;
    };
};
export default _default;
