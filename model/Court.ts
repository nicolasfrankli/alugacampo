import { Reservation } from "./Reservation"
import { SportName } from "../enums/SportName";

export abstract class Court {
    private _id : string;
    private _sports: SportName[];
    private _area: number;
    private _status: boolean;
    private _value: number;
    private _reservations: Reservation[]

    constructor(id: string, sports: SportName[], area: number, value: number) {
        this._id = id;
        this._sports = sports;
        this._area = area;
        this._value = value;
        this._status = false;
        this._reservations = new Array<Reservation>;
    }

    public get id() {
        return this._id;
    }

    public get sports() {
        return this._sports;
    }

    public get area() {
        return this._area;
    }

    public get status() {
        return this._status;
    }

    public get value() {
        return this._value;
    }

    public get reservations() {
        return this._reservations;
    }

    public insertNewReservation(): void {

    }

}