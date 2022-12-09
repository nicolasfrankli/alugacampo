"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Court = void 0;
var Court = /** @class */ (function () {
    function Court(sports, area, value) {
        this.id = "0";
        this.sports = sports;
        this.area = area;
        this.value = value;
        this.status = false;
        this.reservations = new Array;
    }
    return Court;
}());
exports.Court = Court;
