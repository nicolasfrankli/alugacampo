class Reservation {
    private _users: User[];
    private _court: Court;
    private _startTime: Date;
    private _endTime: Date;
    private _value: number;
    private _sport: SportName;
    
    private validateChosenSport(court: Court, sport: SportName) : SportName {
        if(sport in court.sports) {
            return sport;
        } else {
            throw Error();
        }
    }
    
    constructor(users: User[], court: Court, startTime: Date, endTime: Date, value: number, sport: SportName) {
        this._users = users;
        this._court = court;
        this._startTime = startTime;
        this._endTime = endTime;
        this._value = value;
        this._sport = this.validateChosenSport(court, sport);
    }
}