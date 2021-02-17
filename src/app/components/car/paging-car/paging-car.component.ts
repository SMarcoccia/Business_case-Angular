import { ResearchBarCarComponent } from './../research-bar-car/research-bar-car.component';
import { AdService } from './../../../services/ad/ad.service';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Ad } from 'src/app/models/ad/ad.model';

@Component({
  selector: 'app-paging-car',
  templateUrl: './paging-car.component.html',
  styleUrls: ['./paging-car.component.css']
})
export class PagingCarComponent implements OnInit {

    nbPages: Array<number>;
    nbPagesSub: Subscription;
    currentPageNb: number;

    ads: Array<Ad>;
    adsSub: Subscription;

    criteriaCars: Map<string, string>;
    criteriaCarsSub: Subscription;

    @Input() from;


    constructor(
        private adService: AdService, 
    ) { 
        this.currentPageNb = 1;
    }

    ngOnInit(): void {
        this.initSubs();
        this.nbPages=[1];
        if(this.from === 'home')
            this.adService.getAds(1);
        else if(this.criteriaCars !== null)
            this.adService.adsCarsByCriteria(this.criteriaCars, 1);
    }

    onClickPagination(pageAsked: number){
        this.currentPageNb = pageAsked;
        if(this.from === 'home')
            this.adService.getAds(pageAsked);
        else
            this.adService.adsCarsByCriteria(this.criteriaCars, pageAsked);
    }

    initSubs(){
        this.adsSub = this.adService.ads.subscribe(
            (ads: Array<Ad>) => this.ads = ads
        );

        this.nbPagesSub = this.adService.nbPages.subscribe(
            (nbPages: Array<number>) => {
                this.nbPages = nbPages
            }
        );

        this.criteriaCarsSub = this.adService.criteriaCarsBehSub.subscribe(
            (criteriaCars: Map<string, string>) => {
                this.criteriaCars = criteriaCars
            }
        );
    }

    ngOnDestroy(): void {
        this.adsSub.unsubscribe();
        this.nbPagesSub.unsubscribe();
        this.criteriaCarsSub.unsubscribe();
    }

}