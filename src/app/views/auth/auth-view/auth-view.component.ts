import { Router } from '@angular/router';
import { AuthService } from './../../../services/security/auth/auth.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

    msg: string;
    successEdit: boolean;
    authForm: FormGroup;

    constructor(
        private authService: AuthService, 
        private router: Router, 
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this._initForm();
    }

    _initForm() {
        this.authForm = this.formBuilder.group({
        'email': ['', [Validators.email, Validators.required]],
        'password': ['', Validators.required]
        });
    }
    
    onSubmitAuthForm(form: NgForm): void{
        this.authService
        .signIn(form.value.email, form.value.password)
        .then((msg)=>{
            this.msg = msg;
            this.successEdit = true;
            // On veut passer de localhost:4200/ à localhost:4200/books
            // Le tableau contiendra une route dans navigate pour éviter d'oublier les / .
            setTimeout(() => {
                this.msg = undefined;
                this.router.navigate(['/']);
            }, 1000);
        
        })
        .catch((msg) => {
            this.msg = msg;
            this.successEdit = false;
            setTimeout(() => {
                this.msg = undefined;
            }, 1000);
        });
    }
}
