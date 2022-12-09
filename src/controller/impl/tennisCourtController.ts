import { TennisCourt } from "../../model/courtImplementation/TennisCourt";
import { TennisCourtRepository } from "../../repository/impl/TennisCourtRepository";
import { BaseController } from "../BaseController";

export class TennisCourtController implements BaseController<TennisCourt> {

    private courtRepository: TennisCourtRepository;

    constructor(repository: TennisCourtRepository) {
        this.courtRepository = repository;
    }

    public save(tennisCourt: TennisCourt): void {
        this.courtRepository.save(tennisCourt);
    }

    public findAll(): TennisCourt[] {
        return this.courtRepository.findAll();
    }

    public findById(id: string): TennisCourt {
        return this.courtRepository.findById(id);
    }

    //update

    public deleteById(id: string): void {
        this.courtRepository.deleteById(id);
    }
}

