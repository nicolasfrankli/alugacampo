import { FutsalCourt } from "./model/courtImplementation/FutsalCourt";
import { SportName } from "./enums/SportName";
import { FutsalCourtController } from "./controller/CourtController";

let controller: FutsalCourtController = new FutsalCourtController();

let futsalCourt: FutsalCourt = new FutsalCourt([SportName.FootBall], 30, 25, "cloth", true, 5);

controller.addNewCourt(futsalCourt);
controller.findAllCourts();
