"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisCourtControllerImpl = void 0;
var TennisCourtControllerImpl = /** @class */ (function () {
    function TennisCourtControllerImpl(repository) {
        this.courtRepository = repository;
    }
    TennisCourtControllerImpl.prototype.save = function (tennisCourt) {
        this.courtRepository.save(tennisCourt);
    };
    TennisCourtControllerImpl.prototype.findAll = function () {
        return this.courtRepository.findAll();
    };
    TennisCourtControllerImpl.prototype.findById = function (id) {
        return this.courtRepository.findById(id);
    };
    //update
    TennisCourtControllerImpl.prototype.deleteById = function (id) {
        this.courtRepository.deleteById(id);
    };
    return TennisCourtControllerImpl;
}());
exports.TennisCourtControllerImpl = TennisCourtControllerImpl;
