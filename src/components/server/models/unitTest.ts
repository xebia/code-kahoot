export class UnitTest {

    
    private _input : string;
    public get input() : string {
        return this._input;
    }

    
    private _output : string;
    public get output() : string {
        return this._output;
    }

    
    private _description : string;
    public get description() : string {
        return this._description;
    }
    

    constructor(input: string, output: string, description: string){
        this._input = input;
        this._output = output;
        this._description = description;
    }
}