import flatten = require('flat');
const humps = require('humps');
class ListingMapper {
    outputClass:any;
    public key_map:KeyMap;
    private json:any;
    private flatenJSON:any;

    constructor(json: any) {
        this.json = json;
    }

    public mapData() {
        this.outputClass = {};
        Object.keys(this.key_map).forEach((key)=>{
            this.outputClass[key] = this.extract(key, this.key_map);
        });
        return this.outputClass;
    }
    private extract(key:string, key_map:any) {
        var action = key_map[key];
        switch (typeof action) {
            case 'string':
                return this.extractString(action);
            case 'object':
                var obj = {};
                for(var k in action) {
                    obj[k] = this.extract(k, action);
                }
                return obj;
            case 'function':
                return action(this.json);
            default:
                return {};
        }
    }
    private extractString(flatten_key:string) {
        return this.flatten()[flatten_key];
    }

    private flatten() {
        if(typeof this.flatenJSON === 'undefined') {
            this.flatenJSON = flatten(this.json);
        }
        return this.flatenJSON;
    }

    protected extractArrayData(data: any, decamelize = true):Array<any> {
        var result = [];
        if (!data) return result;
        if (data.constructor !== Array) {
            result.push(this.decamelize(data, decamelize))
        } else {
            data.forEach((item:string) => {
                result.push(this.decamelize(item, decamelize))
            });
        }
        return result;
    }

    protected decamelize(string:string, decamelize = true) {
        if (decamelize) {
            return humps.decamelize(string.replace(/\W/g, ''));
        } else {
            return string;
        }
    }

    protected extractBoolKey(array: Array<string>, source_obj: any, prefix:string = null, decamelize = true):Array<string> {
        var result:Array<string> = [];
        if (!source_obj) return result;
        array.forEach((item) => {
            var value = source_obj[item] == 'true';
            if (value) {
                var str = item.replace(prefix, '');
                result.push(this.decamelize(str, decamelize))
            }
        })
        return result;
    }
}

export interface KeyMap {
    address: any,
    show_address: any,
    price: any,
    area: any,
    neighborhood: any,
    description: any,
    amenities: any,
    property_features: any,
    rooms: any,
    bathrooms: any,
    bedrooms: any,
    images: any,
    location: any,
    property_type: any,
    source_type: any,
    source_key: any,
    source_category: any,
    source_status: any,
    source_participants: any,
    provider: any,
    additional_detail: any,
    pet_allowed: any,
    status: any
}

export {ListingMapper}
