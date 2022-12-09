import { SportName } from "./enums/SportName";
import { FutsalCourt } from "./model/courtImplementation/FutsalCourt"
import { TennisCourt } from "./model/courtImplementation/TennisCourt";
import { FutsalCourtRepository } from "./repository/impl/FutsalCourtRepository";
import { TennisCourtRepository } from "./repository/impl/TennisCourtRepository";
import { TennisCourtController } from "./controller/impl/tennisCourtController";
import { FutsalCourtController } from "./controller/impl/FutsalCourtController";

let fcRepository: FutsalCourtRepository = new FutsalCourtRepository();
let fcController: FutsalCourtController = new FutsalCourtController(fcRepository);

let tRepository: TennisCourtRepository = new TennisCourtRepository();
let tController: TennisCourtController = new TennisCourtController(tRepository);

let futsalCourt: FutsalCourt = new FutsalCourt([SportName.FootBall], 30, 25, "cloth", true, 5);
let tennisCourt: TennisCourt = new TennisCourt([SportName.Tennis], 30, 20, "rag", true, 10);

fcController.save(futsalCourt);
fcController.deleteById("1");
console.log(fcController.findAll())

tController.save(tennisCourt);
tController.deleteById("1");
console.log(tController.findAll())
