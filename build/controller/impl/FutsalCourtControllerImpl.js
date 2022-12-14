"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutsalCourtControllerImpl = void 0;
class FutsalCourtControllerImpl {
    constructor(repository) {
        this.courtRepository = repository;
    }
    save(futsalCourt) {
        this.courtRepository.save(futsalCourt);
    }
    findAll() {
        return this.courtRepository.findAll();
    }
    findById(id) {
        return this.courtRepository.findById(id);
    }
    updateById(id, parameters) {
        return this.courtRepository.updateById(id, parameters);
    }
    deleteById(id) {
        this.courtRepository.deleteById(id);
    }
    findByHasNetInGoalPost() {
        return this.courtRepository.findByHasNetInGoalPost();
    }
    createReservationById(id, reservation) {
        return this.courtRepository.createReservationById(id, reservation);
    }
}
exports.FutsalCourtControllerImpl = FutsalCourtControllerImpl;
