import { TypedJsonDB, ContentBase } from "ts-json-db";
import { CourtRepository } from "../CourtRepository";
import { TennisCourt } from "../../model/courtImplementation/TennisCourt";

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

export class TennisCourtRepository implements CourtRepository<TennisCourt> {

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
            throw new Error();
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

        throw new Error();
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

        throw new Error();
    }
}


