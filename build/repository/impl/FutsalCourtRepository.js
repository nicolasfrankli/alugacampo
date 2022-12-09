"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutsalCourtRepository = void 0;
var ts_json_db_1 = require("ts-json-db");
var FutsalCourtRepository = /** @class */ (function () {
    function FutsalCourtRepository() {
        this.db = new ts_json_db_1.TypedJsonDB("./database/futsalCourtDatabase.json");
        if (!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
    }
    FutsalCourtRepository.prototype.save = function (futsalCourt) {
        var lastId = this.db.get("/lastId");
        var newId = "" + (Number(lastId) + 1);
        futsalCourt.id = newId;
        this.db.push("/futsalCourts", futsalCourt);
        this.db.set("/lastId", newId);
    };
    FutsalCourtRepository.prototype.findAll = function () {
        var result = this.db.get("/futsalCourts");
        if (result == null) {
            throw new Error();
        }
        return result;
    };
    FutsalCourtRepository.prototype.findById = function (id) {
        var results = this.findAll();
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var result = results_1[_i];
            if (result.id == id) {
                return result;
            }
        }
        throw new Error();
    };
    FutsalCourtRepository.prototype.deleteById = function (id) {
        var results = this.findAll();
        var i = -1;
        for (i = 0; i < results.length; i++) {
            if (results[i].id == id) {
                break;
            }
        }
        if (i != -1) {
            results.splice(i, 1);
            this.db.set("/futsalCourts", results);
            return;
        }
        throw new Error();
    };
    return FutsalCourtRepository;
}());
exports.FutsalCourtRepository = FutsalCourtRepository;
