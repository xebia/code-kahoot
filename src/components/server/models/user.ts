export default class User {
    
    private _userId : string;
    public get userId() : string {
        return this._userId;
    }


    private _name : string;
    public get name() : string {
        return this._name;
    }

    

    constructor(userId: string, name: string){
        this._userId = userId;
        this._name = name;
    }
}