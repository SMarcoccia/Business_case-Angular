export class Brand{
    private _id: number;
    private _marque: string;

    constructor(marque: string, id: number){
        if(typeof id === 'number'){
            this._id = id;
        }

        this._marque = marque;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get marque(): string {
        return this._marque;
    }
    public set marque(value: string) {
        this._marque = value;
    }

    static fromJSON(data: any): Brand{
        console.log(data);
        return new Brand(data.marque, data.id);
    }
}