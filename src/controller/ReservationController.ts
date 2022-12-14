import { Reservation } from "../model/Reservation";
import { BaseController } from "./BaseController";

export interface ReservationController extends BaseController<Reservation> {

    findByUser(userName: string): Reservation[];

}
