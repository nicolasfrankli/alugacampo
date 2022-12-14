import { Reservation } from "../../model/Reservation";
import { ReservationRepository } from "../../repository/ReservationRepository";
import { BaseController } from "../BaseController";

export class ReservationControllerImpl implements BaseController<Reservation> {

    private repository: ReservationRepository;

    constructor(repository: ReservationRepository) {
        this.repository = repository;
    }

    public save(reservation: Reservation): void {
        this.repository.save(reservation);
    }

    public findAll(): Reservation[] {
        return this.repository.findAll();
    }

    public findById(id: string): Reservation {
        return this.repository.findById(id);
    }

    public updateById(id: string, parameters: Map<string, Object>): Reservation {
        return this.repository.updateById(id, parameters);
    } 

    public deleteById(id: string): void {
        this.repository.deleteById(id);
    }

    public findByUser(userName: string): Reservation[] {
        return this.repository.findByUser(userName);
    }
}
