import { SportName } from "./enums/SportName";
import { FutsalCourt } from "./model/courtImplementation/FutsalCourt"
import { TennisCourt } from "./model/courtImplementation/TennisCourt";
import { FutsalCourtRepository } from "./repository/FutsalCourtRepository";
import { TennisCourtRepository } from "./repository/TennisCourtRepository";
import { FutsalCourtRepositoryImpl } from "./repository/impl/FutsalCourtRepositoryImpl";
import { TennisCourtRepositoryImpl } from "./repository/impl/TennisCourtRepositoryImpl";
import { FutsalCourtController } from "./controller/FutsalCourtController";
import { TennisCourtController } from "./controller/TennisCourtController";
import { FutsalCourtControllerImpl } from "./controller/impl/FutsalCourtControllerImpl";
import { TennisCourtControllerImpl } from "./controller/impl/TennisCourtControllerImpl";
import { ReservationRepository } from "./repository/ReservationRepository";
import { ReservationRepositoryImpl } from "./repository/impl/ReservationRepositoryImpl";
import { ReservationController } from "./controller/ReservationController";
import { ReservationControllerImpl } from "./controller/impl/ReservationControlllerImpl";
import { Reservation } from "./model/Reservation";

let fRepository: FutsalCourtRepository = new FutsalCourtRepositoryImpl();
let tRepository: TennisCourtRepository = new TennisCourtRepositoryImpl();
let rRepository: ReservationRepository = new ReservationRepositoryImpl();

let fController: FutsalCourtController = new FutsalCourtControllerImpl(fRepository);
let tController: TennisCourtController = new TennisCourtControllerImpl(tRepository);
let rController: ReservationController = new ReservationControllerImpl(rRepository);

let futsalCourt: FutsalCourt = new FutsalCourt([SportName.FootBall], 30, 25, "cloth", true, 5);
let tennisCourt: TennisCourt = new TennisCourt([SportName.Tennis], 30, 20, "rag", true, 10);

let today: Date = new Date();
let tomorrow: Date = new Date('2022-12-31');

let reservation: Reservation = new Reservation(["icaro", "nicolas"], futsalCourt, today, tomorrow, 25, SportName.FootBall);

fController.save(futsalCourt);
fController.deleteById("1");
console.log(fController.findAll())

tController.save(tennisCourt);
tController.deleteById("1");
console.log(tController.findAll())

rController.save(reservation);
console.log(rController.findAll())
