import { TypedJsonDB, ContentBase } from "ts-json-db";
import { EmptyFutsalCourtError } from "../../exception/EmptyFutsalCourtError";
import { IdNotFoundError } from "../../exception/IdNotFoundError";
import { FutsalCourt } from "../../model/courtImplementation/FutsalCourt";
import { FutsalCourtRepository } from "../FutsalCourtRepository";

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
    
    constructor() {
        this.db = new TypedJsonDB<FutsalCourtDatabaseSchema>("./database/futsalCourtDatabase.json");
        if(!this.db.exists("/lastId")) {
            this.db.set("/lastId", "0");
        }
    }

    public save(futsalCourt: FutsalCourt): void {
        let lastId: string | null = this.db.get("/lastId");
        let newId: string = "" + (Number(lastId) + 1);

        futsalCourt.id = newId;
        this.db.push("/futsalCourts", futsalCourt);
        this.db.set("/lastId", newId)
    }

    public findAll(): FutsalCourt[] {
        let result = this.db.get("/futsalCourts");
        if(result == null) {
            throw new EmptyFutsalCourtError("Não temos quadras de futsal.");
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
            this.db.set("/futsalCourts", results);
            return;
        }

        throw new IdNotFoundError("ID não encontrado.");
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
    };
}

