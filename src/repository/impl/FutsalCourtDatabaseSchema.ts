import { ContentBase } from "ts-json-db";
import { FutsalCourt } from "../../model/courtImplementation/FutsalCourt";

export interface FutsalCourtDatabaseSchema extends ContentBase {
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

