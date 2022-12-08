"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutsalCourtRepository = void 0;
var ts_json_db_1 = require("ts-json-db");
var FutsalCourtRepository = /** @class */ (function () {
    function FutsalCourtRepository() {
        this.lastId = 0;
        this._db = new ts_json_db_1.TypedJsonDB("database.json");
    }
    FutsalCourtRepository.prototype.save = function (futsalCourt) {
        futsalCourt.id = "" + (this.lastId + 1);
        this._db.push("/futsalCourts", futsalCourt);
    };
    FutsalCourtRepository.prototype.findAll = function () {
        var result = this._db.get("/futsalCourts");
        console.log(result);
    };
    return FutsalCourtRepository;
}());
exports.FutsalCourtRepository = FutsalCourtRepository;
