// id, caracteristique
export class Caracteristique {
    private _id: number;
    private _caracteristique: Array<string>;

    public get id(): number {
        return this._id;
    }

    public get caracteristique(): Array<string> {
        return this._caracteristique;
    }
    public set caracteristique(value: Array<string>) {
        this._caracteristique = value;
    }
}