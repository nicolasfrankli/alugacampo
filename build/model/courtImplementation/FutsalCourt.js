"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutsalCourt = void 0;
const Court_1 = require("../Court");
class FutsalCourt extends Court_1.Court {
    constructor(sports, area, value, goalPostsMaterial, hasGoalPostNet, numberOfBallsAvailable) {
        super(sports, area, value);
        this.goalPostsMaterial = goalPostsMaterial;
        this.hasGoalPostNet = hasGoalPostNet;
        this.numberOfBallsAvailable = numberOfBallsAvailable;
    }
}
exports.FutsalCourt = FutsalCourt;
