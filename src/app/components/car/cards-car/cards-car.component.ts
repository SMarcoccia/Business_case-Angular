import { AdService } from './../../../services/ad/ad.service';
import { Ad } from './../../../models/ad/ad.model';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-car',
  templateUrl: './cards-car.component.html',
  styleUrls: ['./cards-car.component.css']
})
export class CardsCarComponent implements OnInit {

    cards: Array<Ad>;
    cardsSub: Subscription;

    carImgPath: string = 'assets/img/cars/';


    constructor(private adService: AdService) {
    }
    
    ngOnInit(): void {
        this.initSubs();
    }

    initSubs(){
        this.cardsSub = this.adService.ads.subscribe(
            (cards: Array<Ad>) => this.cards = cards
        )
    }

    ngOnDestroy(){
        this.cardsSub.unsubscribe();
    }
}
