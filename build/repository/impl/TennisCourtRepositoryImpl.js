"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisCourtRepositoryImpl = void 0;
var ts_json_db_1 = require("ts-json-db");
var TennisCourtRepositoryImpl = /** @class */ (function () {
    function TennisCourtRepositoryImpl() {
        this.db = new ts_json_db_1.TypedJsonDB("./database/tennisCourtDatabase.json");
        if (!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
    }
    TennisCourtRepositoryImpl.prototype.save = function (tennisCourt) {
        var lastId = this.db.get("/lastId");
        var newId = "" + (Number(lastId) + 1);
        tennisCourt.id = newId;
        this.db.push("/tennisCourts", tennisCourt);
        this.db.set("/lastId", newId);
    };
    TennisCourtRepositoryImpl.prototype.findAll = function () {
        var result = this.db.get("/tennisCourts");
        if (result == null) {
            throw new Error();
        }
        return result;
    };
    TennisCourtRepositoryImpl.prototype.findById = function (id) {
        var results = this.findAll();
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var result = results_1[_i];
            if (result.id == id) {
                return result;
            }
        }
        throw new Error();
    };
    TennisCourtRepositoryImpl.prototype.deleteById = function (id) {
        var results = this.findAll();
        var i = -1;
        for (i = 0; i < results.length; i++) {
            if (results[i].id == id) {
                break;
            }
        }
        if (i != -1) {
            results.splice(i, 1);
            this.db.set("/tennisCourts", results);
            return;
        }
        throw new Error();
    };
    TennisCourtRepositoryImpl.prototype.showCoveredCourts = function () {
        var results = this.findAll();
        var queryResults = new Array;
        for (var _i = 0, results_2 = results; _i < results_2.length; _i++) {
            var result = results_2[_i];
            if (result.hasOpenCeiling == false) {
                queryResults.push(result);
            }
        }
        return queryResults;
    };
    ;
    return TennisCourtRepositoryImpl;
}());
exports.TennisCourtRepositoryImpl = TennisCourtRepositoryImpl;
