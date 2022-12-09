"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisCourtController = void 0;
var TennisCourtController = /** @class */ (function () {
    function TennisCourtController(repository) {
        this.courtRepository = repository;
    }
    TennisCourtController.prototype.save = function (tennisCourt) {
        this.courtRepository.save(tennisCourt);
    };
    TennisCourtController.prototype.findAll = function () {
        return this.courtRepository.findAll();
    };
    TennisCourtController.prototype.findById = function (id) {
        return this.courtRepository.findById(id);
    };
    //update
    TennisCourtController.prototype.deleteById = function (id) {
        this.courtRepository.deleteById(id);
    };
    return TennisCourtController;
}());
exports.TennisCourtController = TennisCourtController;
