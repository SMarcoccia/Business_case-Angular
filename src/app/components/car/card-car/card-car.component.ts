import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})
export class CardCarComponent implements OnInit {

    carPath: string;

    constructor() { }

    ngOnInit(): void {
        this.carPath = "assets/img/cars/BMW/BMW-Série-1/BMW-Série-1.png";
    }

}
