import { TennisCourt } from "../model/courtImplementation/TennisCourt";
import { BaseController } from "./BaseController";

export interface TennisCourtController extends BaseController<TennisCourt> {
    showCoveredCourts(): TennisCourt[]
}
