"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutsalCourtController = void 0;
var FutsalCourtRepository_1 = require("../repository/FutsalCourtRepository");
var FutsalCourtController = /** @class */ (function () {
    function FutsalCourtController() {
        this._courtRepository = new FutsalCourtRepository_1.FutsalCourtRepository;
    }
    FutsalCourtController.prototype.addNewCourt = function (futsalCourt) {
        this._courtRepository.save(futsalCourt);
    };
    FutsalCourtController.prototype.findAllCourts = function () {
        this._courtRepository.findAll();
    };
    return FutsalCourtController;
}());
exports.FutsalCourtController = FutsalCourtController;
