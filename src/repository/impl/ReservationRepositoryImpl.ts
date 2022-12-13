import { ContentBase, TypedJsonDB } from "ts-json-db/dist/src";
import { EmptyReservationListError } from "../../exception/EmptyReservationListError";
import { ReservationNotFoundError } from "../../exception/ReservationNotFoundError";
import { Reservation } from "../../model/Reservation";
import { ReservationRepository } from "../ReservationRepository";

interface ReservationDatabaseSchema extends ContentBase {
    paths: {
        '/lastId': {
            entryType: "single",
            valueType: string
        },
        '/reservations': {
            entryType: "array",
            valueType: Reservation
        }
    }
}

export class ReservationRepositoryImpl implements ReservationRepository {

    private db: TypedJsonDB<ReservationDatabaseSchema>;
    
    constructor() {
        this.db = new TypedJsonDB<ReservationDatabaseSchema>("./database/reservationDatabase.json");
        if(!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
    }

    public save(reservation: Reservation): void {
        let lastId: string | null = this.db.get("/lastId");
        let newId: string = "" + (Number(lastId) + 1);

        reservation.id = newId;
        this.db.push("/reservations", reservation);
        this.db.set("/lastId", newId)
    }

    public findAll(): Reservation[] {
        let result = this.db.get("/reservations");
        if(result == null) {
            throw new EmptyReservationListError("Não há reservas cadastradas");
        }
        return result;
    }

    public findById(id: string): Reservation {
        let results = this.findAll();

        for(let result of results) {
            if(result.id == id) {
                return result;
            }
        }

        throw new ReservationNotFoundError("Não há reservas para o ID especificado");
    }

    public deleteById(id: string): void {
        let results = this.findAll();
        let i: number  = -1

        for(i = 0; i < results.length; i++) {
            if(results[i].id == id) {
                break;
            }
        }

        if(i != -1) {
            results.splice(i, 1)
            this.db.set("/reservations", results);
            return;
        }

        throw new Error();
    }

}
