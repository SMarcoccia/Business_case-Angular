import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    isAuth: BehaviorSubject<boolean>;

    constructor(private userService: UserService) { 
        this.isAuth = new BehaviorSubject<boolean>(false);
    }

    signIn(email: string, password: string): Promise<void|string>{
        // Attends que le promesse soit résolue ou rejeté res (résolue), rej (rejeté) 
        return new Promise<void|string>((res, rej) => {
            // Simule le server.
            setTimeout(() => {
                // On simule que le user est authentifier.
                if(email === "anakin@yahoo.fr" && password === '0002'){
                    this.userService.updateUser(
                        new User('Thomas', 'CHEVALIER', 'tchevalier@humanbooster.com', 'azerty')
                    )
                    this.isAuth.next(true);

                    res();
                }
                else {
                    rej('Les identifiants ne sont pas correctes');
                }
            },
            1000 // Permet de simuler l'attente de la réponse et pendant se temps on met un chargement.
            );
        });
    }

signOut(): Promise<void>{
    return new Promise<void>((res, rej) => {
            // Ici on appel une api dc on utilise la promesse qui 
            // attendra le retour d'une réponse de l'api.
            this.isAuth.next(false);
            // res permet de renvoyer la valeur de this.isAuth.
            // C'est comme le .emit renvoi une valeur au parent. 
            res();
        }
    );
}
}
