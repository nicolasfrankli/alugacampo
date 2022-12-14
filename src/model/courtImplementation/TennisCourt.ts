import { Court } from "../Court"
import { SportName } from "../../enums/SportName";

export class TennisCourt extends Court {
    public netMaterial: string;
    public hasOpenCeiling: boolean;
    public numberOfBallsAvailable: number;

    constructor(sports: SportName[], area: number, value: number, netMaterial: string, hasOpenCeiling: boolean, numberOfBallsAvailable: number) {
        super(sports, area, value);

        this.netMaterial = netMaterial;
        this.hasOpenCeiling = hasOpenCeiling;
        this.numberOfBallsAvailable = numberOfBallsAvailable;
    }
}
