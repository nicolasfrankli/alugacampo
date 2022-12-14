"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationRepositoryImpl = void 0;
const src_1 = require("ts-json-db/dist/src");
const DataBaseError_1 = require("../../exception/DataBaseError");
class ReservationRepositoryImpl {
    constructor() {
        this.db = new src_1.TypedJsonDB("./database/reservationDatabase.json");
        if (!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
    }
    save(reservation) {
        let lastId = this.db.get("/lastId");
        let newId = "" + (Number(lastId) + 1);
        if (reservation.id == "0") {
            reservation.id = newId;
            this.db.push("/reservations", reservation);
        }
        this.db.set("/lastId", newId);
    }
    findAll() {
        let result = this.db.get("/reservations");
        if (result == null) {
            throw new DataBaseError_1.DatabaseError("Não há reservas cadastradas");
        }
        return result;
    }
    findById(id) {
        let results = this.findAll();
        for (let result of results) {
            if (result.id == id) {
                return result;
            }
        }
        throw new DataBaseError_1.DatabaseError("Não há reservas para o ID especificado");
    }
    updateById(id, parameters) {
        let reservation = this.findById(id);
        if (parameters.has("users")) {
            reservation.users = parameters.get("users");
        }
        if (parameters.has("startTime")) {
            reservation.startTime = parameters.get("startTime");
        }
        if (parameters.has("endTime")) {
            reservation.endTime = parameters.get("endTime");
        }
        if (parameters.has("value")) {
            reservation.value = parameters.get("value");
        }
        if (parameters.has("sport")) {
            reservation.sport = parameters.get("sport");
        }
        this.deleteById(reservation.id);
        this.save(reservation);
        return reservation;
    }
    deleteById(id) {
        let results = this.findAll();
        if (results.length == 0) {
            return;
        }
        let i = 0;
        for (; i < results.length; i++) {
            if (results[i].id == id) {
                break;
            }
        }
        console.log("alo");
        if (i < results.length) {
            results.splice(i, 1);
            console.log("alo1");
            this.db.set("/reservations", results);
            console.log("alo");
            return;
        }
        throw new DataBaseError_1.DatabaseError("Não existe ID especificado.");
    }
    findByUser(userName) {
        let results = this.findAll();
        let queryResults = [];
        for (let result of results) {
            for (let name of result.users) {
                if (name == userName) {
                    queryResults.push(result);
                }
            }
        }
        return queryResults;
    }
}
exports.ReservationRepositoryImpl = ReservationRepositoryImpl;
