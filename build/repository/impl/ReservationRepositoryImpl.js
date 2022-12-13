"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationRepositoryImpl = void 0;
var src_1 = require("ts-json-db/dist/src");
var EmptyReservationListError_1 = require("../../exception/EmptyReservationListError");
var ReservationNotFoundError_1 = require("../../exception/ReservationNotFoundError");
var ReservationRepositoryImpl = /** @class */ (function () {
    function ReservationRepositoryImpl() {
        this.db = new src_1.TypedJsonDB("./database/reservationDatabase.json");
        if (!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
    }
    ReservationRepositoryImpl.prototype.save = function (reservation) {
        var lastId = this.db.get("/lastId");
        var newId = "" + (Number(lastId) + 1);
        reservation.id = newId;
        this.db.push("/reservations", reservation);
        this.db.set("/lastId", newId);
    };
    ReservationRepositoryImpl.prototype.findAll = function () {
        var result = this.db.get("/reservations");
        if (result == null) {
            throw new EmptyReservationListError_1.EmptyReservationListError("Não há reservas cadastradas");
        }
        return result;
    };
    ReservationRepositoryImpl.prototype.findById = function (id) {
        var results = this.findAll();
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var result = results_1[_i];
            if (result.id == id) {
                return result;
            }
        }
        throw new ReservationNotFoundError_1.ReservationNotFoundError("Não há reservas para o ID especificado");
    };
    ReservationRepositoryImpl.prototype.deleteById = function (id) {
        var results = this.findAll();
        var i = -1;
        for (i = 0; i < results.length; i++) {
            if (results[i].id == id) {
                break;
            }
        }
        if (i != -1) {
            results.splice(i, 1);
            this.db.set("/reservations", results);
            return;
        }
        throw new Error();
    };
    return ReservationRepositoryImpl;
}());
exports.ReservationRepositoryImpl = ReservationRepositoryImpl;
