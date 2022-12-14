import { TennisCourt } from "../model/courtImplementation/TennisCourt";
import { Reservation } from "../model/Reservation";
import { BaseController } from "./BaseController";

export interface TennisCourtController extends BaseController<TennisCourt> {
    showCoveredCourts(): TennisCourt[]

    createReservationById(id: string, reservation: Reservation): TennisCourt;
}
