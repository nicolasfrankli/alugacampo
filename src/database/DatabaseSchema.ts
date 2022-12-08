import { ContentBase } from "ts-json-db";
import { FutsalCourt } from "../model/courtImplementation/FutsalCourt";

export interface Restaurant {
    name: string
    chef: string,
    memberCount: number,
    turnOver: number
}

export interface DatabaseSchema extends ContentBase {
    paths: {
        // '/login': {
        //     entryType: "single",
        //     valueType: Login
        // },
        '/futsalCourts': {
            entryType: "array",
            valueType: FutsalCourt
        }
        '/restaurants': {
            entryType: "array",
            valueType: Restaurant
        },
        '/teams': {
            entryType: "dictionary",
            valueType: string
        }
    }
}

