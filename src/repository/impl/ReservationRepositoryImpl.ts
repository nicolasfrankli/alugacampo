import { ContentBase, TypedJsonDB } from "ts-json-db/dist/src";
import { SportName } from "../../enums/SportName";
import { DatabaseError } from "../../exception/DataBaseError";
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

        if(reservation.id == "0") {
            reservation.id = newId;
            this.db.push("/reservations", reservation);
        }

        this.db.set("/lastId", newId)
    }

    public findAll(): Reservation[] {
        let result = this.db.get("/reservations");
        if(result == null) {
            throw new DatabaseError("Não há reservas cadastradas");
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

        throw new DatabaseError("Não há reservas para o ID especificado");
    }

    public updateById(id: string, parameters: Map<String, Object>): Reservation {
        let reservation: Reservation = this.findById(id);

        if(parameters.has("users")) {
            reservation.users = parameters.get("users") as string[];
        }
        if(parameters.has("startTime")) {
            reservation.startTime = parameters.get("startTime") as Date;
        }
        if(parameters.has("endTime")) {
            reservation.endTime = parameters.get("endTime") as Date;
        }
        if(parameters.has("value")) {
            reservation.value = parameters.get("value") as number;
        }
        if(parameters.has("sport")) {
            reservation.sport = parameters.get("sport") as SportName;
        }

        this.deleteById(reservation.id);
        this.save(reservation);

        return reservation;
    }

    public deleteById(id: string): void {
        let results = this.findAll();
        let i: number = 0;

        for(; i < results.length; i++) {
            if(results[i].id == id) {
                break;
            }
        }

        if(i < results.length) {
            results.splice(i, 1)
            this.db.set("/reservations", results);
            return;
        }

        throw new DatabaseError("Não existe ID especificado.");
    }

    public findByUser(userName: string): Reservation[] {
        let results = this.findAll();
        let queryResults: Reservation[] = [];

        for(let result of results) {
            for (let name of result.users) {
                if(name == userName) {
                    queryResults.push(result);
                }
            }
        }
        return queryResults;
    }

}
