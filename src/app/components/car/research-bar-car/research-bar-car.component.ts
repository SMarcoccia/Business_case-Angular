import { BrandService } from './../../../services/brand/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-research-bar-car',
  templateUrl: './research-bar-car.component.html',
  styleUrls: ['./research-bar-car.component.css']
})
export class ResearchBarCarComponent implements OnInit {

    researchForm: FormGroup;

    constructor(
        private brandService: BrandService,
        private formeBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.brandService.getBrands();
    }

    onSubmitResearch(){
        
    }

}
