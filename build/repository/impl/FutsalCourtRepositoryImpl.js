"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutsalCourtRepositoryImpl = void 0;
const ts_json_db_1 = require("ts-json-db");
const DataBaseError_1 = require("../../exception/DataBaseError");
const ReservationRepositoryImpl_1 = require("./ReservationRepositoryImpl");
class FutsalCourtRepositoryImpl {
    constructor() {
        this.db = new ts_json_db_1.TypedJsonDB("./database/futsalCourtDatabase.json");
        if (!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
        this.reservationdb = new ReservationRepositoryImpl_1.ReservationRepositoryImpl();
    }
    save(futsalCourt) {
        let lastId = this.db.get("/lastId");
        let newId = "" + (Number(lastId) + 1);
        if (futsalCourt.id == "0") {
            futsalCourt.id = newId;
            this.db.set("/lastId", newId);
        }
        this.db.push("/futsalCourts", futsalCourt);
    }
    findAll() {
        let result = this.db.get("/futsalCourts");
        if (result == null) {
            throw new DataBaseError_1.DatabaseError("Não temos quadras de futsal.");
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
        if (parameters.has("goalPostsMaterial")) {
            court.goalPostsMaterial = parameters.get("goalPostsMaterial");
        }
        if (parameters.has("hasGoalPostNet")) {
            court.hasGoalPostNet = parameters.get("hasGoalPostNet");
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
            if (results[i].reservations.length > 0) {
                for (let reservation of results[i].reservations) {
                    this.reservationdb.deleteById(reservation.id);
                }
            }
            results.splice(i, 1);
            this.db.set("/futsalCourts", results);
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
    findByHasNetInGoalPost() {
        let results = this.findAll();
        let queryResults = new Array;
        for (let result of results) {
            if (result.hasGoalPostNet == true) {
                queryResults.push(result);
            }
        }
        return queryResults;
    }
}
exports.FutsalCourtRepositoryImpl = FutsalCourtRepositoryImpl;
