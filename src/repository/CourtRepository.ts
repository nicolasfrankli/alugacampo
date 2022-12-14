import { Reservation } from "../model/Reservation";
import { BaseRepository } from "./BaseRepository";

export interface CourtRepository<T> extends BaseRepository<T> {

    findByAvailability(): T[];

    createReservationById(id: String, reservation: Reservation): T;

}
