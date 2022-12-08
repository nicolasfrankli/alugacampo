"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
var Reservation = /** @class */ (function () {
    function Reservation(users, court, startTime, endTime, value, sport) {
        this._users = users;
        this._court = court;
        this._startTime = startTime;
        this._endTime = endTime;
        this._value = value;
        this._sport = this.validateChosenSport(court, sport);
    }
    Reservation.prototype.validateChosenSport = function (court, sport) {
        if (sport in court.sports) {
            return sport;
        }
        else {
            throw Error();
        }
    };
    return Reservation;
}());
exports.Reservation = Reservation;
