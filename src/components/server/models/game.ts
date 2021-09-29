import { v4 as uuidv4 } from 'uuid';
import Challenge from './challenge';
import User from './user'

export default class Game {
    
    private _uuid : string;
    public get uuid() : string {
        return this._uuid;
    }

    
    private _hostId : string;
    public get hostId() : string {
        return this._hostId;
    }

    
    private _players : User[];
    public get players() : User[] {
        return this._players;
    }

    
    private _challenges : Challenge[];
    public get challenges() : Challenge[] {
        return this._challenges;
    }

    
    private _currentChallenge : number;
    public get currentChallenge() : number {
        return this._currentChallenge;
    }

    
    public get score() : {[userId: string]: number} {
        const playerScores = this._players.reduce((result: {[userId: string]: number}, filter) => {
            result[filter.userId] = 0 ;
            return result;
        },{});
        
        for (const challenge of this._challenges) {
            for (let [key, value] of Object.entries(challenge.score)) {
                playerScores[key] += value;
            }
        }
        return playerScores;
    }
    

    constructor(hostId: string, players: User[], challenges: Challenge[], uuid: string = uuidv4()){
        this._hostId = hostId;
        this._players = players;
        this._challenges = challenges;
        this._currentChallenge = 0;
        this._uuid = uuid;
    }

    public addPlayer(player: User){
        this._players.push(player);
    }

    public nextChallenge(): Challenge | undefined {
        const index = this._currentChallenge++;
        if(index > this._challenges.length ){
            //Game is over
            return undefined;
        }
        return this._challenges[index];
    }

    

}