"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
class Reservation {
    constructor(users, courtId, startTime, endTime, value, sport) {
        this.id = "0";
        this.users = users;
        this.courtId = courtId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.value = value;
        this.sport = sport;
    }
}
exports.Reservation = Reservation;
