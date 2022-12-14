"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisCourtRepositoryImpl = void 0;
const ts_json_db_1 = require("ts-json-db");
const DataBaseError_1 = require("../../exception/DataBaseError");
const ReservationRepositoryImpl_1 = require("./ReservationRepositoryImpl");
class TennisCourtRepositoryImpl {
    constructor() {
        this.reservationdb = new ReservationRepositoryImpl_1.ReservationRepositoryImpl();
        this.db = new ts_json_db_1.TypedJsonDB("./database/tennisCourtDatabase.json");
        if (!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
    }
    save(tennisCourt) {
        let lastId = this.db.get("/lastId");
        let newId = "" + (Number(lastId) + 1);
        if (tennisCourt.id == "0") {
            tennisCourt.id = newId;
            this.db.push("/tennisCourts", tennisCourt);
        }
        this.db.set("/lastId", newId);
    }
    findAll() {
        let result = this.db.get("/tennisCourts");
        if (result == null) {
            throw new DataBaseError_1.DatabaseError("Não temos quadras de tênis.");
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
        throw new DataBaseError_1.DatabaseError("ID não encontrado.");
    }
    updateById(id, parameters) {
        let court = this.findById(id);
        if (parameters.has("sports")) {
            court.sports = parameters.get("sports");
        }
        if (parameters.has("area")) {
            court.area = parameters.get("area");
        }
        if (parameters.has("status")) {
            court.status = parameters.get("status");
        }
        if (parameters.has("value")) {
            court.value = parameters.get("value");
        }
        if (parameters.has("netMaterial")) {
            court.netMaterial = parameters.get("netMaterial");
        }
        if (parameters.has("hasOpenCeiling")) {
            court.hasOpenCeiling = parameters.get("hasOpenCeiling");
        }
        if (parameters.has("numberOfBallsAvailable")) {
            court.numberOfBallsAvailable = parameters.get("numberOfBallsAvailable");
        }
        this.deleteById(court.id);
        this.save(court);
        return court;
    }
    deleteById(id) {
        let results = this.findAll();
        let i = 0;
        for (; i < results.length; i++) {
            if (results[i].id == id) {
                break;
            }
        }
        if (i < results.length) {
            for (let reservation of results[i].reservations) {
                this.reservationdb.deleteById(reservation.id);
            }
            results.splice(i, 1);
            this.db.set("/tennisCourts", results);
            return;
        }
        throw new DataBaseError_1.DatabaseError("ID não encontrado.");
    }
    findByAvailability() {
        let results = this.findAll();
        let queryResults = [];
        for (let result of results) {
            if (result.reservations.length == 0) {
                queryResults.push(result);
            }
        }
        return queryResults;
    }
    createReservationById(id, reservation) {
        let court = this.findById(id);
        court.reservations.push(reservation);
        this.deleteById(court.id);
        this.save(court);
        this.reservationdb.save(reservation);
        return court;
    }
    showCoveredCourts() {
        let results = this.findAll();
        let queryResults = new Array;
        for (let result of results) {
            if (result.hasOpenCeiling == false) {
                queryResults.push(result);
            }
        }
        return queryResults;
    }
}
exports.TennisCourtRepositoryImpl = TennisCourtRepositoryImpl;
