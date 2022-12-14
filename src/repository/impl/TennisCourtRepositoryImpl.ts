import { TypedJsonDB, ContentBase } from "ts-json-db";
import { EmptyTennisCourtError } from "../../exception/EmptyTennisCourtError";
import { IdNotFoundError } from "../../exception/IdNotFoundError";
import { TennisCourt } from "../../model/courtImplementation/TennisCourt";
import { TennisCourtRepository } from "../TennisCourtRepository";

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
    
    constructor() {
        this.db = new TypedJsonDB<TennisCourtDatabaseSchema>("./database/tennisCourtDatabase.json");
        if(!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
    }

    public save(tennisCourt: TennisCourt): void {
        let lastId: string | null = this.db.get("/lastId");
        let newId: string = "" + (Number(lastId) + 1);

        tennisCourt.id = newId;
        this.db.push("/tennisCourts", tennisCourt);
        this.db.set("/lastId", newId)
    }

    public findAll(): TennisCourt[] {
        let result = this.db.get("/tennisCourts");
        if(result == null) {
            throw new EmptyTennisCourtError("Não temos quadras de tênis.");
        }
        return result;
    }

    public findById(id: string): TennisCourt {
        let results = this.findAll();

        for(let result of results) {
            if(result.id == id) {
                return result;
            }
        }

        throw new IdNotFoundError("ID não encontrado.");
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
            this.db.set("/tennisCourts", results);
            return;
        }

        throw new IdNotFoundError("ID não encontrado.");
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
    };
}