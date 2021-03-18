import { Caracteristique } from './../caracteristique/caracteristique.model';
import { Model } from './../model/model.model';


export class CaracteristiqueValue{

    private _id: number;
    private _model: Model;
    private _caracteristique: Array<Caracteristique>;
    private _value: string;

    constructor(value: string, caracteristique?: Array<Caracteristique>, model?: Model, id?: number){
        if(typeof id === 'number')
            this._id = id;
        
        this._model = model;
        this._caracteristique = caracteristique;
        this.value = value;
    }

    public get id(): number {
        return this._id;
    }
    
    public get model(): Model {
        return this._model;
    }
    public set model(value: Model) {
        this._model = value;
    }
    
    public get caracteristique(): Array<Caracteristique> {
        return this._caracteristique;
    }
    public set caracteristique(value: Array<Caracteristique>) {
        this._caracteristique = value;
    }
    
    public get value(): string {
        return this._value;
    }
    public set value(value: string) {
        this._value = value;
    }
}