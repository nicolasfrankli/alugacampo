"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
var Reservation = /** @class */ (function () {
    // private validateChosenSport(court: Court, sport: SportName) : boolean {
    //     return sport in court.sports
    //         return true;
    //     } else {
    //         throw Error();
    //     }
    // }
    function Reservation(users, court, startTime, endTime, value, sport) {
        this.id = "0";
        this.users = users;
        this.court = court;
        this.startTime = startTime;
        this.endTime = endTime;
        this.value = value;
        this.sport = sport;
    }
    return Reservation;
}());
exports.Reservation = Reservation;
