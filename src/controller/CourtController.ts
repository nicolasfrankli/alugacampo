import { FutsalCourt } from "../model/courtImplementation/FutsalCourt";
import { CourtRepository } from "../repository/CourtRepository";
import { FutsalCourtRepository } from "../repository/impl/FutsalCourtRepository";

export class FutsalCourtController {

    private courtRepository: CourtRepository<FutsalCourt>;

    constructor(repository: CourtRepository<FutsalCourt>) {
        this.courtRepository = repository;
    }

    public addNewCourt(futsalCourt: FutsalCourt): void {
        this.courtRepository.save(futsalCourt);
    }

    public findAllCourts(): FutsalCourt[] {
        return this.courtRepository.findAll();
    }

    public findById(id: string): FutsalCourt {
        return this.courtRepository.findById(id);
    }

    //update

    public deleteById(id: string): void {
        this.courtRepository.deleteById(id);
    }
}
