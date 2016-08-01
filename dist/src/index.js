"use strict";
var TestClass = (function () {
    function TestClass() {
        console.log("create test class");
    }
    TestClass.prototype.testGet = function () {
        console.log("test get");
    };
    return TestClass;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TestClass;

//# sourceMappingURL=index.js.map
