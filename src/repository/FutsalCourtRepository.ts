import { FutsalCourt } from "../model/courtImplementation/FutsalCourt";
import { CourtRepository } from "./CourtRepository";

export interface FutsalCourtRepository extends CourtRepository<FutsalCourt> {

    // findByHasNetInGoalPost(): FutsalCourt[];

}


