export default class Solution {
    
    private _solution : string;
    public get solution() : string {
        return this._solution;
    }

    
    private _timeCompleted : number;
    public get timeCompleted() : number {
        return this._timeCompleted;
    }

    
    private _userId : string;
    public get userId() : string {
        return this._userId;
    }

    
    
    constructor(userId: string, solution: string, timeCompleted: number){
        this._userId = userId;
        this._solution = solution;
        this._timeCompleted = timeCompleted;
    }
}