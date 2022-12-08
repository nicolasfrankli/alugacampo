import { FutsalCourt } from "../model/courtImplementation/FutsalCourt";
import { FutsalCourtRepository } from "../repository/FutsalCourtRepository";

export class FutsalCourtController {

    private _courtRepository: FutsalCourtRepository;

    constructor() {
        this._courtRepository = new FutsalCourtRepository;
    }

    public addNewCourt(futsalCourt: FutsalCourt): void {
        this._courtRepository.save(futsalCourt);
    }

    public findAllCourts(): void {
        this._courtRepository.findAll();
    }
    //update
    //delete
}
