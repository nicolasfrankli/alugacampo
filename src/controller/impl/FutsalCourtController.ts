import { FutsalCourt } from "../../model/courtImplementation/FutsalCourt";
import { FutsalCourtRepository } from "../../repository/impl/FutsalCourtRepository";
import { BaseController } from "../BaseController";

export class FutsalCourtController implements BaseController<FutsalCourt> {

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

    //update

    public deleteById(id: string): void {
        this.courtRepository.deleteById(id);
    }
}