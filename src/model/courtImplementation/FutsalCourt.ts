import { Court } from "../Court"
import { SportName } from "../../enums/SportName";

export class FutsalCourt extends Court {
    public goalPostsMaterial: string;
    public hasGoalPostNet: boolean;
    public numberOfBallsAvailable: number;

    constructor(sports: SportName[], area: number, value: number, goalPostsMaterial: string, hasGoalPostNet: boolean, numberOfBallsAvailable: number) {
        super(sports, area, value);

        this.goalPostsMaterial = goalPostsMaterial;
        this.hasGoalPostNet = hasGoalPostNet;
        this.numberOfBallsAvailable = numberOfBallsAvailable;

    }
}
