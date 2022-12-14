import { FutsalCourt } from "../../model/courtImplementation/FutsalCourt";
import { Reservation } from "../../model/Reservation";
import { FutsalCourtRepository } from "../../repository/FutsalCourtRepository";
import { FutsalCourtController } from "../FutsalCourtController";

export class FutsalCourtControllerImpl implements FutsalCourtController {

    private courtRepository: FutsalCourtRepository;

    constructor(repository: FutsalCourtRepository) {
        this.courtRepository = repository;
    }

    public save(futsalCourt: FutsalCourt): void {
        this.courtRepository.save(futsalCourt);
    }

    public findAll(): FutsalCourt[] {
        return this.courtRepository.findAll();
    }

    public findById(id: string): FutsalCourt {
        return this.courtRepository.findById(id);
    }

    public updateById(id: string, parameters: Map<string, Object>): FutsalCourt {
        return this.courtRepository.updateById(id, parameters);
    }

    public deleteById(id: string): void {
        this.courtRepository.deleteById(id);
    }

    public findByHasNetInGoalPost(): FutsalCourt[] {
        return this.courtRepository.findByHasNetInGoalPost();
    }

    public createReservationById(id: string, reservation: Reservation): FutsalCourt {
        return this.courtRepository.createReservationById(id, reservation);
    }

}
