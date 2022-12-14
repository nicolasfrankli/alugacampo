"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationNotFoundError = void 0;
class ReservationNotFoundError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ReservationNotFoundError = ReservationNotFoundError;
