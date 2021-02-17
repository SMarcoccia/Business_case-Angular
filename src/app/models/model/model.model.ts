
export class Model{
    private _id: number;
    private _model: String;
    private _brandId: number;
    private _energyId: number;

    constructor(model: string, id?: number, brandId?: number, energyId?: number){
        if(typeof id === 'number'){
            this._id = id;
        }

        if(typeof brandId === 'number'){
            this._brandId = brandId;
        }

        if(typeof energyId === 'number'){
            this._energyId = energyId;
        }

        this._model = model;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get model(): String {
        return this._model;
    }
    public set model(value: String) {
        this._model = value;
    }

    public get brandId(): number {
        return this._brandId;
    }
    public set brandId(value: number) {
        this._brandId = value;
    }

    public get energyId(): number {
        return this._energyId;
    }
    public set energyId(value: number) {
        this._energyId = value;
    }

    static fromJSON(data: any): Model {
        return new Model(data.modele, data.id)                
    }
}