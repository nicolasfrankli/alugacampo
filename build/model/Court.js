"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Court = void 0;
var Court = /** @class */ (function () {
    function Court(sports, area, value) {
        this._id = "0";
        this._sports = sports;
        this._area = area;
        this._value = value;
        this._status = false;
        this._reservations = new Array;
    }
    Object.defineProperty(Court.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Court.prototype, "sports", {
        get: function () {
            return this._sports;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Court.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Court.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Court.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Court.prototype, "reservations", {
        get: function () {
            return this._reservations;
        },
        enumerable: false,
        configurable: true
    });
    Court.prototype.insertNewReservation = function () {
    };
    return Court;
}());
exports.Court = Court;
