declare class ListingMapper {
    outputClass: any;
    key_map: KeyMap;
    private json;
    private flatenJSON;
    constructor(json: any);
    mapData(): any;
    private extract(key, key_map);
    private extractString(flatten_key);
    private flatten();
    protected extractArrayData(data: any, decamelize?: boolean): Array<any>;
    protected decamelize(string: string, decamelize?: boolean): any;
    protected extractBoolKey(array: Array<string>, source_obj: any, prefix?: string, decamelize?: boolean): Array<string>;
}
export interface KeyMap {
    address: any;
    show_address: any;
    price: any;
    area: any;
    neighborhood: any;
    description: any;
    amenities: any;
    property_features: any;
    rooms: any;
    bathrooms: any;
    bedrooms: any;
    images: any;
    location: any;
    property_type: any;
    source_type: any;
    source_key: any;
    source_category: any;
    source_status: any;
    source_participants: any;
    provider: any;
    additional_detail: any;
    pet_allowed: any;
    status: any;
}
export { ListingMapper };
