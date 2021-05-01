import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    static token: string; 
    apiUrl: string = 'https://localhost:8000';
    apiRoadAds: string = '/api';
    connected: BehaviorSubject<string>;

    constructor(private httpClient: HttpClient) {
        this.connected = new BehaviorSubject<string>(null);
    }

    /**
     * 
     * @param email 
     * @param password 
     * @returns {}
     */
    
    signIn(email: string, password: string): Promise<string>{
        return new Promise<string>(
            (res, rej) => {
            this.httpClient.post(
                this.apiUrl + this.apiRoadAds + '/login_check',
                {username: email, password: password},
            )
            .subscribe(
                (token: string) => {
                    AuthService.token = token['token'];
                    this.connected.next(AuthService.token);

                    if(AuthService.token)
                        res("L'authentification à réussi !");
                    else
                        rej("Les identifiants ne sont pas correct");
                }
            )
         });
    }

    signOut(): Promise<string>{
        return new Promise<string>(
            (res, rej) => {
                AuthService.token = null;
                this.connected.next(AuthService.token);
                res("Vous êtes déconnecté.");
            }
        );
    }
}
