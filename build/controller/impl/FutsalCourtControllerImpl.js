"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutsalCourtControllerImpl = void 0;
var FutsalCourtControllerImpl = /** @class */ (function () {
    function FutsalCourtControllerImpl(repository) {
        this.courtRepository = repository;
    }
    FutsalCourtControllerImpl.prototype.save = function (futsalCourt) {
        this.courtRepository.save(futsalCourt);
    };
    FutsalCourtControllerImpl.prototype.findAll = function () {
        return this.courtRepository.findAll();
    };
    FutsalCourtControllerImpl.prototype.findById = function (id) {
        return this.courtRepository.findById(id);
    };
    //update
    FutsalCourtControllerImpl.prototype.deleteById = function (id) {
        this.courtRepository.deleteById(id);
    };
    FutsalCourtControllerImpl.prototype.findByHasNetInGoalPost = function () {
        return this.courtRepository.findByHasNetInGoalPost();
    };
    return FutsalCourtControllerImpl;
}());
exports.FutsalCourtControllerImpl = FutsalCourtControllerImpl;
