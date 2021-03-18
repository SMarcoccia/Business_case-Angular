import { Router } from '@angular/router';
import { AuthService } from './../../../services/security/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitSignIn(form: NgForm){
    this.authService.signIn(form.value.email, form.value.password)
    .then(()=>{
      // On veut passer de localhost:4200/ à localhost:4200/books
      // Le tableau contiendra une route dans navigate pour éviter d'oublier les / .
      this.router.navigate(['books']);
    })
    .catch((errorMsg) => {
        this.errorMsg = errorMsg;
    });
  }
}
