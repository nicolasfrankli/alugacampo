"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationControllerImpl = void 0;
class ReservationControllerImpl {
    constructor(repository) {
        this.repository = repository;
    }
    save(reservation) {
        this.repository.save(reservation);
    }
    findAll() {
        return this.repository.findAll();
    }
    findById(id) {
        return this.repository.findById(id);
    }
    updateById(id, parameters) {
        return this.repository.updateById(id, parameters);
    }
    deleteById(id) {
        this.repository.deleteById(id);
    }
    findByUser(userName) {
        return this.repository.findByUser(userName);
    }
}
exports.ReservationControllerImpl = ReservationControllerImpl;
