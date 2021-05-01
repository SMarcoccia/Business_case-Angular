import { AuthService } from './../../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    connected: string;
    connectedSub: Subscription;

    constructor(private router: Router, private authService: AuthService){
        this.initSubs();
    }

    ngOnDestroy(): void {
        this.connectedSub.unsubscribe();
    }

    initSubs(): void{
        this.connectedSub = this.authService.connected.subscribe(
            (connected: string) => this.connected = connected
        );
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        if(this.connected != null)
            return true;
        this.router.navigate(['']);
    }
  

}


