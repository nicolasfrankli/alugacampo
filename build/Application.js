"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FutsalCourt_1 = require("./model/courtImplementation/FutsalCourt");
var SportName_1 = require("./enums/SportName");
var CourtController_1 = require("./controller/CourtController");
var controller = new CourtController_1.FutsalCourtController();
var futsalCourt = new FutsalCourt_1.FutsalCourt([SportName_1.SportName.FootBall], 30, 25, "cloth", true, 5);
controller.addNewCourt(futsalCourt);
controller.findAllCourts();
