import { Brand } from './../../models/brand/brand.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

    apiUrl: string;
    brands: Brand;
    // brands: BehaviorSubject<Brand>;


    constructor(private httpClient: HttpClient) { 
        this.apiUrl = 'https://localhost:8000';
    }

    getBrands(){
        this.httpClient
        .get(this.apiUrl + '/api/v1/marque')
        .subscribe(
            (res: any) => {
                console.log(res);
                const brands = res.map(item => {
                    return Brand.fromJSON(item);
                });
                this.brands = brands;
                console.log(this.brands);
            }
        );
    }
}
