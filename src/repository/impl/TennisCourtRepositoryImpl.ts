import { TypedJsonDB, ContentBase } from "ts-json-db";
import { SportName } from "../../enums/SportName";
import { DatabaseError } from "../../exception/DataBaseError";
import { TennisCourt } from "../../model/courtImplementation/TennisCourt";
import { Reservation } from "../../model/Reservation";
import { ReservationRepository } from "../ReservationRepository";
import { TennisCourtRepository } from "../TennisCourtRepository";
import { ReservationRepositoryImpl } from "./ReservationRepositoryImpl";

interface TennisCourtDatabaseSchema extends ContentBase {
    paths: {
        '/lastId': {
            entryType: "single",
            valueType: string
        },
        '/tennisCourts': {
            entryType: "array",
            valueType: TennisCourt
        }
    }
}

export class TennisCourtRepositoryImpl implements TennisCourtRepository {

    private db: TypedJsonDB<TennisCourtDatabaseSchema>;
    private reservationdb: ReservationRepository = new ReservationRepositoryImpl();
    
    constructor() {
        this.db = new TypedJsonDB<TennisCourtDatabaseSchema>("./database/tennisCourtDatabase.json");
        if(!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
    }

    public save(tennisCourt: TennisCourt): void {
        let lastId: string | null = this.db.get("/lastId");
        let newId: string = "" + (Number(lastId) + 1);

        if(tennisCourt.id == "0") {
            tennisCourt.id = newId;
            this.db.push("/tennisCourts", tennisCourt);
        }

        this.db.set("/lastId", newId);
    }

    public findAll(): TennisCourt[] {
        let result: TennisCourt[] | null = this.db.get("/tennisCourts");
        if(result == null) {
            throw new DatabaseError("Não temos quadras de tênis.");
        }
        return result;
    }

    public findById(id: string): TennisCourt {
        let results: TennisCourt[] = this.findAll();

        for(let result of results) {
            if(result.id == id) {
                return result;
            }
        }

        throw new DatabaseError("ID não encontrado.");
    }

    public updateById(id: string, parameters: Map<String, Object>): TennisCourt {
        let court: TennisCourt = this.findById(id);

        if(parameters.has("sports")) {
            court.sports = parameters.get("sports") as SportName[];
        }
        if(parameters.has("area")) {
            court.area = parameters.get("area") as number;
        }
        if(parameters.has("status")) {
            court.status = parameters.get("status") as boolean;
        }
        if(parameters.has("value")) {
            court.value = parameters.get("value") as number;
        }
        if(parameters.has("netMaterial")) {
            court.netMaterial = parameters.get("netMaterial") as string;
        }
        if(parameters.has("hasOpenCeiling")) {
            court.hasOpenCeiling = parameters.get("hasOpenCeiling") as boolean;
        }
        if(parameters.has("numberOfBallsAvailable")) {
            court.numberOfBallsAvailable = parameters.get("numberOfBallsAvailable") as number;
        }

        this.deleteById(court.id);
        this.save(court);

        return court;
    }

    public deleteById(id: string): void {
        let results: TennisCourt[] = this.findAll();
        let i: number = 0;

        for(; i < results.length; i++) {
            if(results[i].id == id) {
                break;
            }
        }

        if(i < results.length) {
            for(let reservation of results[i].reservations) {
                this.reservationdb.deleteById(reservation.id)
            }

            results.splice(i, 1)
            this.db.set("/tennisCourts", results);

            return;
        }

        throw new DatabaseError("ID não encontrado.");
    }

    public findByAvailability(): TennisCourt[] {
        let results = this.findAll();
        let queryResults: TennisCourt[] = [];

        for(let result of results) {
            if(result.reservations.length == 0) {
                queryResults.push(result);
            }
        }
        return queryResults;
    }

    public createReservationById(id: string, reservation: Reservation): TennisCourt {
       let court = this.findById(id);
       court.reservations.push(reservation);

       this.deleteById(court.id);
       this.save(court);
       this.reservationdb.save(reservation);

       return court;
    }

    public showCoveredCourts(): TennisCourt[]{
        let results = this.findAll();
        let queryResults = new Array<TennisCourt>;

        for(let result of results) {
            if(result.hasOpenCeiling == false) {
                queryResults.push(result);
            }
        }

        return queryResults;
    }
}
