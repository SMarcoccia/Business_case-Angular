export class Energy{
    private _id: number;
    private _energy: String;

    constructor(energy: string, id?: number){
        if(typeof id === 'number'){
            this._id = id;
        }

        this._energy = energy;
    }

    public get id(): number {
        return this._id;
    }

    public get energy(): String {
        return this._energy;
    }
    public set energy(value: String) {
        this._energy = value;
    }

    static fromJSON(data: any){
        return new Energy(data.carburant, data.id)
    }
}