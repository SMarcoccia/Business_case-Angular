import { HttpClient } from '@angular/common/http';
import { Ad } from './../../models/ad/ad.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdService {

    apiUrl: string = 'https://localhost:8000';
    apiRoadAdsHome: string = '/api/v1/home';
    apiRoadAds: string = '/api/v1/annonces';
    apiRoadAd: string = '/api/v1/annonce';

    ads: BehaviorSubject<Array<Ad>>;

    // ad: BehaviorSubject<Ad>;

    criteriaCarsBehSub: BehaviorSubject<Map<string, string>>;

    nbPages: BehaviorSubject<Array<number>>;

    constructor(private httpClient: HttpClient) { 
        this.ads = new BehaviorSubject<Array<Ad>>(null);
        // this.ad = new BehaviorSubject<Ad>(null);
        this.nbPages = new BehaviorSubject<Array<number>>(null);
        this.criteriaCarsBehSub = new BehaviorSubject<Map<string, string>>(null);
    }

    adsCarsByCriteria(criteriaCars: any, numeroPage: number): Promise<void | string>{
        this.criteriaCarsBehSub.next(criteriaCars);

        let urlParameters = '?';
        for(let [key, value] of criteriaCars)
            urlParameters+=key + '=' + value + '&';

        urlParameters = urlParameters.replace(/ /g, '%20');
        urlParameters = urlParameters.substring(0, urlParameters.length-1);

        return new Promise<void |string>(
            (resolve, rej) => {
                this.httpClient
                .get(this.apiUrl + this.apiRoadAds + urlParameters + '&page=' + numeroPage)
                .subscribe(
                    (res: any) => {
                        const ads = res.data.map(item => {
                            return Ad.fromJSON(item);
                        }); 
                        
                        this.ads.next(ads);
                        
                        const array = [];
                        for(let i=1; i <= res.nbPages; i++){
                            array.push(i);
                        }
                        this.nbPages.next(array);
                        resolve();
                    }
                )
            }
        )
    }

    /**
     * Pour la home : affiche les voitures date d'annonce de la plus récente à la plus ancienne.
     */
    getAds(numeroPage: number): void {

        this.httpClient
        .get(this.apiUrl + this.apiRoadAdsHome + "?page=" + numeroPage)
        .subscribe(
            (res: any) => {
                const ads = res.data.map(item => {
                        return Ad.fromJSON(item);
                    }
                );

                this.ads.next(ads);

                const array = [];
                for(let i=1; i <= res.nbPages; i++){
                    array.push(i);
                }
                this.nbPages.next(array);
            }
        )
    }

    /**
     * Détail d'une annonce.
     */
    getAd(id: number): Promise<void | any> {
        return new Promise<void | any>(
            (resolve, rej) => {
                this.httpClient
                .get(this.apiUrl + this.apiRoadAd + '/' + id)
                .subscribe(
                    (res: any) => {
                        const ad = Ad.fromJSON(res.data);
                        // this.ad.next(ad);
                        resolve(ad);
                    }
                );
            }
        )
    }
}
