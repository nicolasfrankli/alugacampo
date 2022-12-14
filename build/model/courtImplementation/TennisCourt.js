"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TennisCourt = void 0;
const Court_1 = require("../Court");
class TennisCourt extends Court_1.Court {
    constructor(sports, area, value, netMaterial, hasOpenCeiling, numberOfBallsAvailable) {
        super(sports, area, value);
        this.netMaterial = netMaterial;
        this.hasOpenCeiling = hasOpenCeiling;
        this.numberOfBallsAvailable = numberOfBallsAvailable;
    }
}
exports.TennisCourt = TennisCourt;
