import { FutsalCourt } from "../model/courtImplementation/FutsalCourt";
import { Reservation } from "../model/Reservation";
import { BaseController } from "./BaseController";

export interface FutsalCourtController extends BaseController<FutsalCourt> {
    findByHasNetInGoalPost(): FutsalCourt[];

    createReservationById(id: string, reservation: Reservation): FutsalCourt;
}
