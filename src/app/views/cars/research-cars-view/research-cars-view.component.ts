import { Ad } from './../../../models/ad/ad.model';
import { AdService } from './../../../services/ad/ad.service';
import { Brand } from './../../../models/brand/brand.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-research-cars-view',
  templateUrl: './research-cars-view.component.html',
  styleUrls: ['./research-cars-view.component.css']
})
export class ResearchCarsViewComponent implements OnInit {

    cards: Array<Ad>;
    cardsSub: Subscription;

    carImgPath: string;
    
    constructor(private adService: AdService) { 
  
    }

    ngOnInit(): void {
        this.carImgPath = 'assets/img/cars/'
        this.initSubs();
    }

    initSubs(){
        this.cardsSub = this.adService.ads.subscribe(
            (cards: Array<Ad>) => this.cards = cards
        );
    }

    ngOnDestroy(): void {
        this.cardsSub.unsubscribe();
    }
}
