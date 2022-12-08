import { TypedJsonDB, Dictionary } from "ts-json-db";
import { DatabaseSchema } from "../database/DatabaseSchema";
import { FutsalCourt } from "../model/courtImplementation/FutsalCourt";

export class FutsalCourtRepository {

    private _db: TypedJsonDB<DatabaseSchema>;
    private lastId = 0;
    
    constructor() {
        this._db = new TypedJsonDB<DatabaseSchema>("database.json");
    }

    public save(futsalCourt: FutsalCourt): void {
        futsalCourt.id = "" + (this.lastId + 1)
        this._db.push("/futsalCourts", futsalCourt);
    }

    public findAll(): void {
        let result = this._db.get("/futsalCourts");
        console.log(result);
    }
}

