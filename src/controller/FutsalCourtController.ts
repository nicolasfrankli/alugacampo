import { FutsalCourt } from "../model/courtImplementation/FutsalCourt";
import { BaseController } from "./BaseController";

export interface FutsalCourtController extends BaseController<FutsalCourt> {
    findByHasNetInGoalPost(): FutsalCourt[];
}
