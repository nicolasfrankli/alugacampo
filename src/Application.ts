import { FutsalCourt } from "./model/courtImplementation/FutsalCourt";
import { SportName } from "./enums/SportName";
import { FutsalCourtController } from "./controller/CourtController";
import { CourtRepository } from "./repository/CourtRepository";
import { FutsalCourtRepository } from "./repository/impl/FutsalCourtRepository";

let repository: CourtRepository<FutsalCourt> = new FutsalCourtRepository();

let controller: FutsalCourtController = new FutsalCourtController(repository);

let futsalCourt: FutsalCourt = new FutsalCourt([SportName.FootBall], 30, 25, "cloth", true, 5);

controller.addNewCourt(futsalCourt);

controller.deleteById("1");
console.log(controller.findAllCourts())
