"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SportName_1 = require("./enums/SportName");
const FutsalCourt_1 = require("./model/courtImplementation/FutsalCourt");
const TennisCourt_1 = require("./model/courtImplementation/TennisCourt");
const FutsalCourtRepositoryImpl_1 = require("./repository/impl/FutsalCourtRepositoryImpl");
const TennisCourtRepositoryImpl_1 = require("./repository/impl/TennisCourtRepositoryImpl");
const FutsalCourtControllerImpl_1 = require("./controller/impl/FutsalCourtControllerImpl");
const TennisCourtControllerImpl_1 = require("./controller/impl/TennisCourtControllerImpl");
const ReservationRepositoryImpl_1 = require("./repository/impl/ReservationRepositoryImpl");
const ReservationControlllerImpl_1 = require("./controller/impl/ReservationControlllerImpl");
const Reservation_1 = require("./model/Reservation");
const MainMenu_1 = require("./view/MainMenu");
let rRepository = new ReservationRepositoryImpl_1.ReservationRepositoryImpl();
let fRepository = new FutsalCourtRepositoryImpl_1.FutsalCourtRepositoryImpl();
let tRepository = new TennisCourtRepositoryImpl_1.TennisCourtRepositoryImpl();
let fController = new FutsalCourtControllerImpl_1.FutsalCourtControllerImpl(fRepository);
let tController = new TennisCourtControllerImpl_1.TennisCourtControllerImpl(tRepository);
let rController = new ReservationControlllerImpl_1.ReservationControllerImpl(rRepository);
let futsalCourt = new FutsalCourt_1.FutsalCourt([SportName_1.SportName.FootBall], 30, 25, "cloth", true, 5);
let futsalCourt2 = new FutsalCourt_1.FutsalCourt([SportName_1.SportName.FootBall], 30, 25, "cloth", false, 5);
let tennisCourt = new TennisCourt_1.TennisCourt([SportName_1.SportName.Tennis], 30, 20, "rag", true, 10);
let today = new Date();
let tomorrow = new Date('2022-12-31');
let reservation = new Reservation_1.Reservation(["icaro", "nicolas"], futsalCourt.id, today, tomorrow, 25, SportName_1.SportName.FootBall);
// let reservation2: Reservation = new Reservation(["abacate", "nicolas"], tennisCourt.id, today, tomorrow, 25, SportName.FootBall);
// fController.save(futsalCourt);
// fController.save(futsalCourt2);
//fController.deleteById("1");
// console.log(fController.findAll())
// tController.save(tennisCourt);
//tController.deleteById("1");
// console.log(tController.findAll())
// rController.save(reservation);
// rController.save(reservation2);
// console.log(rController.findAll())
// try {
//     console.log(rController.findById("345"))
// } catch(e: any ) {
//     if(e instanceof DatabaseError) {
//         console.log(e.message);
//     }
// }
// console.log(rController.findByUser('nicolas'));
// console.log(fController.createReservationById("5",reservation));
// console.log(rController.findAll());
let menu = new MainMenu_1.MainMenu(fController, rController, tController);
menu.run();
