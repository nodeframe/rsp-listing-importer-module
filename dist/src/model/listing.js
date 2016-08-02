"use strict";
var IListing_1 = require('../schema/IListing');
IListing_1.ListingSchema.static("createFromJSON", function (json, source) {
});
IListing_1.ListingSchema.virtual('address.full').get(function () {
    var add = [this.address.street,
        this.address.unit_number,
        this.address.city,
        this.address.state,
        this.address.postal_code,
        this.address.country];
    add = add.filter(function (v) {
        return v;
    });
    return add.join(', ');
});

//# sourceMappingURL=listing.js.map
