"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisCourtControllerImpl = void 0;
class TennisCourtControllerImpl {
    constructor(repository) {
        this.courtRepository = repository;
    }
    save(tennisCourt) {
        this.courtRepository.save(tennisCourt);
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
    showCoveredCourts() {
        return this.courtRepository.showCoveredCourts();
    }
    createReservationById(id, reservation) {
        return this.courtRepository.createReservationById(id, reservation);
    }
}
exports.TennisCourtControllerImpl = TennisCourtControllerImpl;
