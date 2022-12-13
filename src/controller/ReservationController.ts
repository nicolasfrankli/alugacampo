import { Reservation } from "../model/Reservation";
import { BaseController } from "./BaseController";
import { Court } from "../model/Court";

export interface ReservationController extends BaseController<Reservation> {
    findByUser(userName: string): Array<Court>;
}
