import { Brand } from './../../models/brand/brand.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

    apiUrl: string;
    brands: BehaviorSubject<Array<Brand>>;


    constructor(private httpClient: HttpClient) { 
        this.apiUrl = 'https://localhost:8000';
        this.brands = new BehaviorSubject<Array<Brand>>(null);
    }

    getBrands(): void{
        this.httpClient
        .get(this.apiUrl + '/api/v1/marque')
        .subscribe(
            (res: any) => {
                const brands = res.map(item => {
                    return Brand.fromJSON(item);
                });
                this.brands.next(brands);
            }
        );
    }
}
