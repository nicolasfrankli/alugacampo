"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationControllerImpl = void 0;
var ReservationControllerImpl = /** @class */ (function () {
    function ReservationControllerImpl(repository) {
        this.repository = repository;
    }
    ReservationControllerImpl.prototype.save = function (futsalCourt) {
        this.repository.save(futsalCourt);
    };
    ReservationControllerImpl.prototype.findAll = function () {
        return this.repository.findAll();
    };
    ReservationControllerImpl.prototype.findById = function (id) {
        return this.repository.findById(id);
    };
    //update
    ReservationControllerImpl.prototype.deleteById = function (id) {
        this.repository.deleteById(id);
    };
    return ReservationControllerImpl;
}());
exports.ReservationControllerImpl = ReservationControllerImpl;
