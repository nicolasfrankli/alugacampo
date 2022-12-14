import { SportName } from "../enums/SportName";

export class Reservation {
    public id: string;
    public users: string[];
    public courtId: string;
    public startTime: Date;
    public endTime: Date;
    public value: number;
    public sport: SportName;
    
    constructor(users: string[], courtId: string, startTime: Date, endTime: Date, value: number, sport: SportName) {
        this.id = "0";
        this.users = users;
        this.courtId = courtId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.value = value;
        this.sport = sport;
    }
}
