import { Reservation } from "./Reservation";
import { SportName } from "../enums/SportName";

export abstract class Court {
    public id: string;
    public sports: SportName[];
    public area: number;
    public status: boolean;
    public value: number;
    public reservations: Reservation[]

    constructor(sports: SportName[], area: number, value: number) {
        this.id = "0";
        this.sports = sports;
        this.area = area;
        this.value = value;
        this.status = false;
        this.reservations = new Array<Reservation>;
    }

}
