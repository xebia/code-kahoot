import Solution from './solution';
import UnitTest from './unitTest';

export default class Challenge {
    private _description: string;

    public get description() : string {
        return this._description;
    }

    private _playerSolutions : Solution[];

    private _unitTests : UnitTest[];
    public get unitTests() : UnitTest[] {
        return this._unitTests;
    }

    public get playerSolutions() : Solution[]{
        return this._playerSolutions;
    }

    public get score(): {[userId: string]: number}{
       return this.playerSolutions.sort((a, b)=> a.timeCompleted - b.timeCompleted).reduce((result: {[userId: string]: number}, filter, index) => {
            result[filter.userId] = index;
            return result;
        },{});
    }
    
    public constructor(description: string, unitTests: UnitTest[], playerSolutions: Solution[]){
        this._description = description
        this._unitTests = unitTests;
        this._playerSolutions = playerSolutions;
    }

}