import { Court } from "../Court"
import { SportName } from "../../enums/SportName";

export class FutsalCourt extends Court {
    private _goalPostsMaterial: string;
    private _hasGoalPostNet: boolean;
    private _numberOfBallsAvailable: number;

    constructor(sports: SportName[], area: number, value: number, goalPostsMaterial: string, hasGoalPostNet: boolean, numberOfBallsAvailable: number) {
        super(sports, area, value);

        this._goalPostsMaterial = goalPostsMaterial;
        this._hasGoalPostNet = hasGoalPostNet;
        this._numberOfBallsAvailable = numberOfBallsAvailable;

    }

    public get goalPostsMaterial() {
        return this._goalPostsMaterial;
    }

    public get hasGoalPostNet() {
        return this._hasGoalPostNet;
    }

    public get numberOfBallsAvailable() {
        return this._numberOfBallsAvailable;
    }
}
