import { TennisCourt } from "../../model/courtImplementation/TennisCourt";
import { TennisCourtRepository } from "../../repository/TennisCourtRepository";
import { TennisCourtController } from "../TennisCourtController";

export class TennisCourtControllerImpl implements TennisCourtController {

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

    public updateById(id: string, parameters: Map<string, Object>): TennisCourt {
        return this.courtRepository.updateById(id, parameters);
    }

    public deleteById(id: string): void {
        this.courtRepository.deleteById(id);
    }

    public showCoveredCourts(): TennisCourt[] {
        return this.courtRepository.showCoveredCourts();
    }
}

