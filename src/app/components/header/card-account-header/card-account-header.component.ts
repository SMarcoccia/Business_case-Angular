import { Subscription } from 'rxjs';
import { AuthService } from './../../../services/security/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-account-header',
    templateUrl: './card-account-header.component.html',
    styleUrls: ['./card-account-header.component.css']
})
export class CardAccountHeaderComponent implements OnInit {

    errorMsg: string;
    connected: string; 
    connectedSub: Subscription;

    constructor(private router: Router, private authService: AuthService, ) { }
    
    ngOnInit(): void {
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

    onClickSignOut(){
        this.authService
        .signOut()
        .then(()=>{
            this.router.navigate(['/']);
        })
        .catch((errorMsg) => {
            this.errorMsg = errorMsg;
        });
    }
}
