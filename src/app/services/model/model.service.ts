import { HttpClient } from '@angular/common/http';
import { Model } from './../../models/model/model.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

    selectValueModel: BehaviorSubject<boolean>;

    apiUrl: string = 'https://localhost:8000';
    apiRoadModels: string = '/api/v1/modele';

    apiRoadModelsByBrand: string = '/api/v1/marque/modeleParMarque/';

    models: BehaviorSubject<Array<Model>>;
    modelsByBrand: BehaviorSubject<Array<Model>>;

    constructor(private httpClient: HttpClient) {
        this.models = new BehaviorSubject<Array<Model>>(null);
        this.selectValueModel = new BehaviorSubject<boolean>(false);
    }

    // getModels(): void {
    //     this.httpClient
    //     .get(this.apiUrl + this.apiRoadModels)
    //     .subscribe(
    //         (res: any) => {
    //             const models = res.map(item => {
    //                 return Model.fromJSON(item);
    //             });   
    //             this.models.next(models);           
    //         }
    //     )
    // }

    getModelsByBrand(id: string): void {
        this.httpClient
        .get(this.apiUrl + this.apiRoadModelsByBrand + id)
        .subscribe(
            (res: any) => {
                const modelsByBrand = res.map(item => {
                    return Model.fromJSON(item);
                });
                this.models.next(modelsByBrand);
            }
        )
    }
}
