export class Brand{
    private _id: number;
    private _brand: string;

    constructor(brand: string, id?: number){

        if(typeof id === 'number'){
            this._id = id;
        }

        this._brand = brand;
    }

    public get id(): number {
        return this._id;
    }

    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }

    static fromJSON(data: any): Brand{
        return new Brand(data.marque, data.id);
    }
}