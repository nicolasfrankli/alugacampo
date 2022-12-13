import { Court } from "../../model/Court";
import { Reservation } from "../../model/Reservation";
import { ReservationRepository } from "../../repository/ReservationRepository";
import { BaseController } from "../BaseController";

export class ReservationControllerImpl implements BaseController<Reservation> {

    private repository: ReservationRepository;

    constructor(repository: ReservationRepository) {
        this.repository = repository;
    }

    public save(futsalCourt: Reservation): void {
        this.repository.save(futsalCourt);
    }

    public findAll(): Reservation[] {
        return this.repository.findAll();
    }

    public findById(id: string): Reservation {
        return this.repository.findById(id);
    }

    //update

    public deleteById(id: string): void {
        this.repository.deleteById(id);
    }

    public findByUser(userName: string): Array<Court> {
        return this.repository.findByUser(userName);
    }
}
