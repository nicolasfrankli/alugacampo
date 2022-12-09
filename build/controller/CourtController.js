"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutsalCourtController = void 0;
var FutsalCourtController = /** @class */ (function () {
    function FutsalCourtController(repository) {
        this.courtRepository = repository;
    }
    FutsalCourtController.prototype.addNewCourt = function (futsalCourt) {
        this.courtRepository.save(futsalCourt);
    };
    FutsalCourtController.prototype.findAllCourts = function () {
        return this.courtRepository.findAll();
    };
    FutsalCourtController.prototype.findById = function (id) {
        return this.courtRepository.findById(id);
    };
    //update
    FutsalCourtController.prototype.deleteById = function (id) {
        this.courtRepository.deleteById(id);
    };
    return FutsalCourtController;
}());
exports.FutsalCourtController = FutsalCourtController;
