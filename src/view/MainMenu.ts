import { FutsalCourtController } from "../controller/FutsalCourtController";
import { ReservationController } from "../controller/ReservationController";
import { TennisCourtController } from "../controller/TennisCourtController";
import { SportName } from "../enums/SportName";
import { ApplicationError } from "../exception/ApplicationError";
import { InvalidSportError } from "../exception/InvalidSportError";
import { FutsalCourt } from "../model/courtImplementation/FutsalCourt";
import { TennisCourt } from "../model/courtImplementation/TennisCourt";
import { Reservation } from "../model/Reservation";
import promptSync from "prompt-sync";

export class MainMenu {
    private futsalCourtController: FutsalCourtController;
    private reservationController: ReservationController;
    private tennisCourtController: TennisCourtController;
    private input = promptSync();

    constructor (futsalCourtController: FutsalCourtController, reservationController: ReservationController, tennisCourtController: TennisCourtController){
         this.futsalCourtController = futsalCourtController;
         this.reservationController = reservationController;
         this.tennisCourtController = tennisCourtController;
    }

    run(): void{
        let option: string | null = "1";

        do {
            console.log(
                        "    _    _                                                   \n" +
                        "   / \\  | |_   _  __ _  __ _  ___ __ _ _ __ ___  _ __   ___  \n" +
                        "  / _ \\ | | | | |/ _` |/ _` |/ __/ _` | '_ ` _ \\| '_ \\ / _ \\ \n" +
                        " / ___ \\| | |_| | (_| | (_| | (_| (_| | | | | | | |_) | (_) |\n" +
                        "/_/   \\_\\_|\\__,_|\\__, |\\__,_|\\___\\__,_|_| |_| |_| .__/ \\___/ \n" +
                        "                 |___/                          |_|          \n");

            console.log('1 - Cadastrar quadra     2 - Buscar quadra       3 - Deletar Quadra\n' +
            '4 - Buscar quadras de futsal com rede no gol       5 - Encontrar quadras de tênis cobertas      6 - Fazer reserva\n' +
            '7 - Buscar reservar por usuário    8 - Buscar reserva        9 - Listar reservas\n' +
            '10 - Listar quadras de tênis        11 - Listar quadras de futsal           0 - Exit\n');

            option = this.input("What operation do you want to perform?") as string;
            try {
                switch (option) {
                    case '1':
                        this.createCourt();
                        break
                    case '2':
                        this.findCourt();
                        break
                    case '3':
                        this.deleteCourt();
                        break
                    case '4':
                        this.findFutsalCourtWithNet();
                        break
                    case '5':
                        this.findCoveredTennisCourt();
                        break
                    case '6':
                        this.createReservation();
                        break
                    case '7':
                        this.findReservationsbyUser();
                        break
                    case '8':
                        this.findReservation();
                        break
                    case '9':
                        this.showAllReservations();
                        break
                    case '10':
                        this.showAllTennisCourts();
                        break
                    case '11':
                        this.showAllFutsalCourts();
                        break
                }
            } catch (e: any) {
                if(e instanceof ApplicationError) {
                    console.log(e.message);
                }
                if(e instanceof Error) {
                    console.log("System error. Contact administrator." + console.log(e.message));
                }
            }
        this.input("");
        console.clear();
        } while(option != "0");
        console.log("Closed application.");
    }

    private createCourt(): void {
        console.log("\nCadastrar quadra\n");
        let area: number = Number(this.input('Qual a área da quadra ?'));
        let value: number = Number(this.input('Qual o valor ?'));

        let op: string | null = (this.input('Qual esporte(Tênis ou Futsal)? t/f') as string).toLowerCase();
        if (op == 't') {
            let tennisCourt = new TennisCourt([SportName.Tennis], area, value, "cloth", false, 5);
            this.tennisCourtController.save(tennisCourt);
        } else if (op == 'f') {
            let futsalCourt = new FutsalCourt([SportName.FootBall], area, value, "cloth", false, 5);
            this.futsalCourtController.save(futsalCourt);
        } else {
            throw new InvalidSportError("Esporte inválido! Futsal(f) ou tênis(t) ?");
        }
    }

    private findCourt(): any {
        console.log("\nBuscar quadra\n");
        let number: string = this.input('Enter id number:') as string;

        let op: string = (this.input('Qual esporte(Tênis ou Futsal)? t/f') as string).toLowerCase();
        if (op == 't') {
            let court: TennisCourt = this.tennisCourtController.findById(number);
            console.log(court);
        } else if (op == 'f') {
            let court: FutsalCourt = this.futsalCourtController.findById(number);
            console.log(court);
        } else {
            throw new InvalidSportError("Esporte inválido! Futsal(f) ou tênis(t) ?");
        }
    }

    private deleteCourt(): void {
        console.log("\nDeletar quadra\n");
        let id: string = this.input('Enter id number:') as string;

        let op: string = (this.input('Qual esporte(Tênis ou Futsal)? t/f') as string).toLowerCase();
        if (op == 't') {
            this.tennisCourtController.deleteById(id);
        } else if (op == 'f') {
            this.futsalCourtController.deleteById(id);
        } else {
            throw new InvalidSportError("Esporte inválido! Futsal(f) ou tênis(t) ?");
        }
    }

    private findFutsalCourtWithNet(): void {
        console.log("\nBuscar quadras de futsal com rede\n");
        console.log(this.futsalCourtController.findByHasNetInGoalPost());
    }

    private findCoveredTennisCourt(): void {
        console.log("\nBuscar quadras de tênis coberta\n");
        console.log(this.tennisCourtController.showCoveredCourts());
    }

    private createReservation(): void {
        console.log("\nCriar reserva\n");
        let users: string[] = [];
        let op: string = "s";
        while (op != "n") {
            let nameUser: string = this.input("Digite o nome do usuário:") as string;
            users.push(nameUser);
            op = this.input("Você deseja cadastrar mais alguém? (s/n)") as string;
        }
        let courtId: string  = this.input("ID da quadra:") as string;
        let startTime: Date = new Date(this.input("Data (aaaa-mm-dd):") as string);
        let endTime: Date = new Date(this.input("Data (aaaa-mm-dd):") as string);
        let value: number = Number(this.input('Qual o valor?'));
        let reservation: Reservation;
        let op2: string = (this.input('Qual esporte(Tênis ou Futsal)? t/f') as string).toLowerCase();

        if (op2 == 't') {
            reservation = new Reservation(users, courtId, startTime, endTime, value, SportName.Tennis);
            this.tennisCourtController.createReservationById(courtId, reservation);
        } else if (op2 == 'f') {
            reservation = new Reservation(users, courtId, startTime, endTime, value, SportName.FootBall);
            this.futsalCourtController.createReservationById(courtId, reservation);
        } else {
            throw new InvalidSportError("Esporte inválido! Futsal(f) ou tênis(t) ?");
        }
    }

    private findReservationsbyUser(): void {
        console.log("\nMostrar Reservar por usuário\n");
        let name: string = this.input("Digite o nome:") as string;
        console.log(this.reservationController.findByUser(name));
    }

    private findReservation(): void {
        console.log("\nBuscar reserva por id\n");
        let name: string = this.input("Digite o ID:") as string;
        console.log(this.reservationController.findById(name));
    }

    private showAllReservations(): void {
        console.log("\nTodas as reservas:\n");
        console.log(this.reservationController.findAll());
    }

    private showAllFutsalCourts(): void {
        console.log("\nTodas as quadras:\n");
        console.log(this.futsalCourtController.findAll());
    }

    private showAllTennisCourts(): void {
        console.log("\nTodas as quadras:\n");
        console.log(this.tennisCourtController.findAll());
    }
}
