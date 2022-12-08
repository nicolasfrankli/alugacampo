import { Court } from "../Court"
import { SportName } from "../../enums/SportName";

export class FutsalCourt extends Court {
    private _goalPostsMaterial: string;
    private _hasGoalPostNet: boolean;
    private _numberOfBallsAvailable: number;

    constructor(id: string, sports: SportName[], area: number, value: number, goalPostsMaterial: string, hasGoalPostNet: boolean, numberOfBallsAvailable: number) {
        super(id, sports, area, value);

        this._goalPostsMaterial = goalPostsMaterial;
        this._hasGoalPostNet = hasGoalPostNet;
        this._numberOfBallsAvailable = numberOfBallsAvailable;

    }
}