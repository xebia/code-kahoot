export default class Game {
    
    private _uuid : string;
    public get uuid() : string {
        return this._uuid;
    }

    

    public constructor(uuid: string){
        this._uuid = uuid;
    }

}