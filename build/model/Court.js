"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Court = void 0;
class Court {
    constructor(sports, area, value) {
        this.id = "0";
        this.sports = sports;
        this.area = area;
        this.value = value;
        this.status = false;
        this.reservations = [];
    }
}
exports.Court = Court;
