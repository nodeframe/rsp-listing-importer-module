"use strict";
var flatten = require('flat');
var humps = require('humps');
var ListingMapper = (function () {
    function ListingMapper(json) {
        this.json = json;
    }
    ListingMapper.prototype.mapData = function () {
        var _this = this;
        this.outputClass = {};
        Object.keys(this.key_map).forEach(function (key) {
            _this.outputClass[key] = _this.extract(key, _this.key_map);
        });
        return this.outputClass;
    };
    ListingMapper.prototype.extract = function (key, key_map) {
        var action = key_map[key];
        switch (typeof action) {
            case 'string':
                return this.extractString(action);
            case 'object':
                var obj = {};
                for (var k in action) {
                    obj[k] = this.extract(k, action);
                }
                return obj;
            case 'function':
                return action(this.json);
            default:
                return {};
        }
    };
    ListingMapper.prototype.extractString = function (flatten_key) {
        return this.flatten()[flatten_key];
    };
    ListingMapper.prototype.flatten = function () {
        if (typeof this.flatenJSON === 'undefined') {
            this.flatenJSON = flatten(this.json);
        }
        return this.flatenJSON;
    };
    ListingMapper.prototype.extractArrayData = function (data, decamelize) {
        var _this = this;
        if (decamelize === void 0) { decamelize = true; }
        var result = [];
        if (!data)
            return result;
        if (data.constructor !== Array) {
            result.push(this.decamelize(data, decamelize));
        }
        else {
            data.forEach(function (item) {
                result.push(_this.decamelize(item, decamelize));
            });
        }
        return result;
    };
    ListingMapper.prototype.decamelize = function (string, decamelize) {
        if (decamelize === void 0) { decamelize = true; }
        if (decamelize) {
            return humps.decamelize(string.replace(/\W/g, ''));
        }
        else {
            return string;
        }
    };
    ListingMapper.prototype.extractBoolKey = function (array, source_obj, prefix, decamelize) {
        var _this = this;
        if (prefix === void 0) { prefix = null; }
        if (decamelize === void 0) { decamelize = true; }
        var result = [];
        if (!source_obj)
            return result;
        array.forEach(function (item) {
            var value = source_obj[item] == 'true';
            if (value) {
                var str = item.replace(prefix, '');
                result.push(_this.decamelize(str, decamelize));
            }
        });
        return result;
    };
    return ListingMapper;
}());
exports.ListingMapper = ListingMapper;

//# sourceMappingURL=listing_mapper.js.map
