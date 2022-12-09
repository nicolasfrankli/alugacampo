"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisCourt = void 0;
var Court_1 = require("../Court");
var TennisCourt = /** @class */ (function (_super) {
    __extends(TennisCourt, _super);
    function TennisCourt(sports, area, value, netMaterial, hasOpenCeiling, numberOfBallsAvailable) {
        var _this = _super.call(this, sports, area, value) || this;
        _this.netMaterial = netMaterial;
        _this.hasOpenCeiling = hasOpenCeiling;
        _this.numberOfBallsAvailable = numberOfBallsAvailable;
        return _this;
    }
    return TennisCourt;
}(Court_1.Court));
exports.TennisCourt = TennisCourt;
