"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisCourtRepository = void 0;
var ts_json_db_1 = require("ts-json-db");
var TennisCourtRepository = /** @class */ (function () {
    function TennisCourtRepository() {
        this.db = new ts_json_db_1.TypedJsonDB("./database/tennisCourtDatabase.json");
        if (!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
    }
    TennisCourtRepository.prototype.save = function (tennisCourt) {
        var lastId = this.db.get("/lastId");
        var newId = "" + (Number(lastId) + 1);
        tennisCourt.id = newId;
        this.db.push("/tennisCourts", tennisCourt);
        this.db.set("/lastId", newId);
    };
    TennisCourtRepository.prototype.findAll = function () {
        var result = this.db.get("/tennisCourts");
        if (result == null) {
            throw new Error();
        }
        return result;
    };
    TennisCourtRepository.prototype.findById = function (id) {
        var results = this.findAll();
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var result = results_1[_i];
            if (result.id == id) {
                return result;
            }
        }
        throw new Error();
    };
    TennisCourtRepository.prototype.deleteById = function (id) {
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
    return TennisCourtRepository;
}());
exports.TennisCourtRepository = TennisCourtRepository;
