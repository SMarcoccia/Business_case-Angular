import { Energy } from './../energy/energy.model';
import { Brand } from './../brand/brand.model';


export class Model{

    private _id: number;
    private _model: String;
    private _brand: Brand;
    private _energy: Energy;


    constructor(model: string, id?: number, brand?: Brand, energy?: Energy){
        if(typeof id === 'number'){
            this._id = id;
        }

        this._model = model;
        this._brand = brand;
    }

    public get id(): number {
        return this._id;
    }

    public get model(): String {
        return this._model;
    }
    public set model(value: String) {
        this._model = value;
    }

    public get brand(): Brand {
        return this._brand;
    }
    public set brand(value: Brand) {
        this._brand = value;
    }

    public get energy(): Energy {
        return this._energy;
    }
    public set energy(value: Energy) {
        this._energy = value;
    }

    static fromJSON(data: any): Model {
        return new Model(data.modele, data.id)                
    }
}