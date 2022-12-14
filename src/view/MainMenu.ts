import { FutsalCourtController } from "../controller/FutsalCourtController";
import { FutsalCourtControllerImpl } from "../controller/impl/FutsalCourtControllerImpl";
import { TennisCourtControllerImpl } from "../controller/impl/TennisCourtControllerImpl";
import { ReservationController } from "../controller/ReservationController";
import { TennisCourtController } from "../controller/TennisCourtController";
import { InvalidSportError } from "../exception/InvalidSportError";
import { Court } from "../model/Court";
import { FutsalCourt } from "../model/courtImplementation/FutsalCourt";
import { TennisCourt } from "../model/courtImplementation/TennisCourt";

export class MainMenu {
    private futsalCourtController: FutsalCourtController;
    private reservationController: ReservationController;
    private tennisCourtController: TennisCourtController;

    constructor (futsalCourtController: FutsalCourtController, reservationController: ReservationController, tennisCourtController: TennisCourtController){
         this.futsalCourtController = futsalCourtController;
         this.reservationController = reservationController;
         this.tennisCourtController = tennisCourtController;
    }   

    run(): void{
        do {
            console.log('\nWelcome!\n');
            console.log('1 - Cadastrar quadra     2 - Buscar quadra       3 - Deletar Quadra\n' +
            '4 - Buscar quadras de futsal com rede no gol       5 - Encontrar quadras de tênis cobertas       6 - Transfer\n' +
            '7 - Mostrar quadras de tênis disponíveis    8 - List accounts        9 - Load file\n' +
            '0 - Exit\n');
            try {
                option = input("What operation do you want to perform?");
                switch (option) {
                    case '1':
                        createCourt();
                        break
                    case '2':
                        findCourt();
                        break
                    case '3':
                        deleteCourt();
                        break
                    case '4':
                        findFutsalCourtWithNet();
                        break
                    case '5':
                        findCoveredTennisCourt();
                        break
                    case '6':
                        transfer();
                        break
                    case '7':
                        earnInterest();
                        break
                    case '8':
                        listAccounts();
                        break
                    case '9':
                        loadFile();
                        break
                }
            } catch (e: any) {
                if (e instanceof AplicationError) {
                    console.log(e.message);
                }
                if(e instanceof Error) {
                    console.log("System error. Contact administrator.");
                }
            } finally {
                console.log("Completed operation. Enter 0 to exit.");
            }
        } while (option != '0');
        
        console.log("Closed application.")
    }
}

function createCourt(): void {
    console.log("\nCadastrar quadra\n");
    let number: string = input('Enter id number:');
    let area: number = input('Qual a área?');
    let value: number = input('Qual o valor?');

    let court;

    let op: string = input('Qual esporte(Tênis ou Futsal)? t/f').toLowerCase();
    if (op == 't') {
        court = new TennisCourt(number, op, area, false, value, null);
        TennisCourtControllerImpl.prototype.save(court);
    } else if (op == 'f') {
        court = new FutsalCourt(number, op, area, false, value, null);
        FutsalCourtControllerImpl.prototype.save(court);
    } else {
        throw new InvalidSportError("Esporte inválido! Futsal(f) ou tênis(t) ?");
    }
}

function findCourt(): any {
    console.log("\nBuscar quadra\n");
    let number: string = input('Enter id number:');

    let op: string = input('Qual esporte(Tênis ou Futsal)? t/f').toLowerCase();
    if (op == 't') {
        let court: TennisCourt = TennisCourtControllerImpl.prototype.findById(number);
        return court;
    } else if (op == 'f') {
        let court: FutsalCourt = FutsalCourtControllerImpl.prototype.findById(number);
        return court;
    } else {
        throw new InvalidSportError("Esporte inválido! Futsal(f) ou tênis(t) ?");
    }
}

function deleteCourt(): void {
    console.log("\nDeletar quadra\n");
    let number: string = input('Enter id number:');

    let op: string = input('Qual esporte(Tênis ou Futsal)? t/f').toLowerCase();
    if (op == 't') {
        TennisCourtControllerImpl.prototype.deleteById(number);
    } else if (op == 'f') {
        FutsalCourtControllerImpl.prototype.deleteById(number);
    } else {
        throw new InvalidSportError("Esporte inválido! Futsal(f) ou tênis(t) ?");
    }
}

function findFutsalCourtWithNet(): void {
    console.log("\nBuscar quadras de futsal com rede\n");
    let courts: Array<FutsalCourtControllerImpl> = FutsalCourtControllerImpl.prototype.findByHasNetInGoalPost();
    return courts;
}

function findCoveredTennisCourt(): void {
    console.log("\nBuscar quadras de tênis coberta\n");
    let courts: Array<TennisCourtControllerImpl> = TennisCourtControllerImpl.prototype.showCoveredCourts();
    return courts;
}