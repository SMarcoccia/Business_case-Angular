export class Ad {

    private _id: number;
    private _year: number;
    private _kms: number;
    private _price: number;
    private _brand: string;
    private _model: string;
    private _energy: string;
    private _reference: number;
    private _photos: string | Array<string>;
    private _description: string;
    private _registration: string;
    private _guarantee: string;
    private _characteristicValues: Array<string>;
    private _createdAt: Date;


    constructor(
        year: number,
        price: number,
        brand: string,
        model: string,
        photos: string | Array<string>,
        kms?: number,
        energy?: string,
        reference?: number,
        description?: string,
        registration?: string,
        guarantee?: string,
        characteristicValues?: Array<string>,
        createdAt?: Date,
        id?: number,
    ) {
        this._year = year;
        this._kms = kms;
        this._price = price;
        this._brand = brand;
        this._model = model;
        this._energy = energy;
        this._reference = reference;
        this._photos = photos;
        this._description = description;
        this._registration = registration;
        this._guarantee = guarantee;
        this._characteristicValues = characteristicValues;
        this._createdAt = createdAt;
        this._id = this.testId(id);
    }

    
    private testId(id: number){
        if(typeof id === 'number')
            return id;
    }

    static fromJSON(data: any){
        return new Ad(
            data.annee,
            data.prix,
            data.marque,
            data.modele,
            data.photo,
            data.kilometrage,
            data.carburant,
            data.reference,
            data.description,
            data.immatriculation,
            data.garantie,
            data.caracteristiqueValeurs,
            data.createdAt,
            data.id,
        )
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get year(): number {
        return this._year;
    }
    public set year(value: number) {
        this._year = value;
    }

    public get kms(): number {
        return this._kms;
    }
    public set kms(value: number) {
        this._kms = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get registration(): string {
        return this._registration;
    }
    public set registration(value: string) {
        this._registration = value;
    }

    public get reference(): number {
        return this._reference;
    }
    public set reference(value: number) {
        this._reference = value;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }
    public set createdAt(value: Date) {
        this._createdAt = value;
    }

    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }

    public get model(): string {
        return this._model;
    }
    public set model(value: string) {
        this._model = value;
    }

    public get characteristicValues(): Array<string> {
        return this._characteristicValues;
    }
    public set characteristicValues(value: Array<string>) {
        this._characteristicValues = value;
    }

    public get energy(): string {
        return this._energy;
    }
    public set energy(value: string) {
        this._energy = value;
    }

    public get photos(): string | Array<any> {
        return this._photos;
    }
    public set photos(value: string | Array<any>) {
        this._photos = value;
    }

    public get guarantee(): string {
        return this._guarantee;
    }
    public set guarantee(value: string) {
        this._guarantee = value;
    }
}

