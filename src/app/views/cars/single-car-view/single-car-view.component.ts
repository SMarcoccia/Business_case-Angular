import { Ad } from './../../../models/ad/ad.model';
import { AdService } from './../../../services/ad/ad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-car-view',
  templateUrl: './single-car-view.component.html',
  styleUrls: ['./single-car-view.component.css']
})
export class SingleCarViewComponent implements OnInit {

    cardAd: Ad;

    carImgPath: string = "assets/img/cars/";

    constructor(
        private adService: AdService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.adService.getAd( + (this.route.snapshot.params.id))
        .then((res) =>  {
            this.cardAd = res;
        })
        .catch(() => {
            
        });
    }
}
