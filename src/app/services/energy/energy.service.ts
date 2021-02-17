import { Energy } from './../../models/energy/energy.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {

    apiUrl: string = 'https://localhost:8000';
    apiRoad: string = '/api/v1/carburant';
    energies: BehaviorSubject<Array<Energy>>;

    constructor(private httpClient: HttpClient) { 
        this.energies = new BehaviorSubject<Array<Energy>>(null);
    }

    getEnergies(): void {
        this.httpClient
        .get(this.apiUrl + this.apiRoad)
        .subscribe(
            (res: any) => {
                const energies = res.map(item => {
                    return Energy.fromJSON(item);
                });
                this.energies.next(energies);
            }
        )
    }

}
