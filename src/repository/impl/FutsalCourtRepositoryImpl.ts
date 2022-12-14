import { TypedJsonDB, ContentBase } from "ts-json-db";
import { SportName } from "../../enums/SportName";
import { DatabaseError } from "../../exception/DataBaseError";
import { FutsalCourt } from "../../model/courtImplementation/FutsalCourt";
import { Reservation } from "../../model/Reservation";
import { FutsalCourtRepository } from "../FutsalCourtRepository";
import { ReservationRepository } from "../ReservationRepository";
import { ReservationRepositoryImpl } from "./ReservationRepositoryImpl";

interface FutsalCourtDatabaseSchema extends ContentBase {
    paths: {
        '/lastId': {
            entryType: "single",
            valueType: string
        },
        '/futsalCourts': {
            entryType: "array",
            valueType: FutsalCourt
        }
    }
}

export class FutsalCourtRepositoryImpl implements FutsalCourtRepository {

    private db: TypedJsonDB<FutsalCourtDatabaseSchema>;
    private reservationdb: ReservationRepository;
    
    constructor() {
        this.db = new TypedJsonDB<FutsalCourtDatabaseSchema>("./database/futsalCourtDatabase.json");
        if(!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
        this.reservationdb = new ReservationRepositoryImpl();
    }

    public save(futsalCourt: FutsalCourt): void {
        let lastId: string | null = this.db.get("/lastId");
        let newId: string = "" + (Number(lastId) + 1);

        if(futsalCourt.id == "0") {
            futsalCourt.id = newId;
            this.db.set("/lastId", newId)
        }

        this.db.push("/futsalCourts", futsalCourt);
    }

    public findAll(): FutsalCourt[] {
        let result = this.db.get("/futsalCourts");
        if(result == null) {
            throw new DatabaseError("Não temos quadras de futsal.");
        }
        return result;
    }

    public findById(id: string): FutsalCourt {
        let results = this.findAll();

        for(let result of results) {
            if(result.id == id) {
                return result;
            }
        }

        throw new DatabaseError("ID não encontrado.");
    }

    public updateById(id: string, parameters: Map<String, Object>): FutsalCourt {
        let court: FutsalCourt = this.findById(id);

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
        if(parameters.has("goalPostsMaterial")) {
            court.goalPostsMaterial = parameters.get("goalPostsMaterial") as string;
        }
        if(parameters.has("hasGoalPostNet")) {
            court.hasGoalPostNet = parameters.get("hasGoalPostNet") as boolean;
        }
        if(parameters.has("numberOfBallsAvailable")) {
            court.numberOfBallsAvailable = parameters.get("numberOfBallsAvailable") as number;
        }

        this.deleteById(court.id);
        this.save(court);

        return court;
    }

    public deleteById(id: string): void {
        let results = this.findAll();
        let i: number = 0

        for(; i < results.length; i++) {
            if(results[i].id == id) {
                break;
            }
        }

        if(i < results.length) {
            if(results[i].reservations.length > 0) {
                for(let reservation of results[i].reservations) {
                    this.reservationdb.deleteById(reservation.id)
                }
            }
            results.splice(i, 1)
            this.db.set("/futsalCourts", results);
            return;
        }

        throw new DatabaseError("ID não encontrado.");
    }

    public findByAvailability(): FutsalCourt[] {
        let results = this.findAll();
        let queryResults: FutsalCourt[] = [];

        for(let result of results) {
            if(result.reservations.length == 0) {
                queryResults.push(result);
            }
        }
        return queryResults;
    }

    public createReservationById(id: string, reservation: Reservation): FutsalCourt {
       let court = this.findById(id);
       court.reservations.push(reservation);

       this.deleteById(court.id);
       this.save(court);
       this.reservationdb.save(reservation);

       return court;
    }

    public findByHasNetInGoalPost(): FutsalCourt[]{
        let results = this.findAll();
        let queryResults = new Array<FutsalCourt>;

        for(let result of results) {
            if(result.hasGoalPostNet == true) {
                queryResults.push(result);
            }
        }
        return queryResults;
    }

}

