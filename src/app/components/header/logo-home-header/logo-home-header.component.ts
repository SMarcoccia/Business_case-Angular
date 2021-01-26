import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-home-header',
  templateUrl: './logo-home-header.component.html',
  styleUrls: ['./logo-home-header.component.css']
})
export class LogoHomeHeaderComponent implements OnInit {

    logoPath: string;

    constructor() { }

    ngOnInit(): void {
        this.logoPath = 'assets/img/logo/Centre-Auto-Ccas.jpg';
    }

}
