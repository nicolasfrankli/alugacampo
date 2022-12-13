import { Court } from "../model/Court";
import { Reservation } from "../model/Reservation";
import { BaseRepository } from "./BaseRepository";

export interface ReservationRepository extends BaseRepository<Reservation> {
    findByUser(userName: string): Array<Court>;
}
