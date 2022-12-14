"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
class Reservation {
    // private validateChosenSport(court: Court, sport: SportName) : boolean {
    //     return sport in court.sports
    //         return true;
    //     } else {
    //         throw Error();
    //     }
    // }
    constructor(users, court, startTime, endTime, value, sport) {
        this.id = "0";
        this.users = users;
        this.courtId = court.id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.value = value;
        this.sport = sport;
    }
}
exports.Reservation = Reservation;
