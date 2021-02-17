import { AdService } from './../../../services/ad/ad.service';
import { EnergyService } from './../../../services/energy/energy.service';
import { ModelService } from './../../../services/model/model.service';
import { Energy } from './../../../models/energy/energy.model';
import { Model } from './../../../models/model/model.model';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Brand } from './../../../models/brand/brand.model';
import { BrandService } from './../../../services/brand/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-research-bar-car',
  templateUrl: './research-bar-car.component.html',
  styleUrls: ['./research-bar-car.component.css']
})
export class ResearchBarCarComponent implements OnInit {

    carsForm: FormGroup;

    selectValueModel: boolean;
    selectValueModelSub: Subscription;

    brands: Array<Brand>;
    brandsSub: Subscription;

    models: Array<Model>
    modelsSub: Subscription;

    modelsByBrand: Array<Model>;
    modelsByBrandSub: Subscription;

    energies: Array<Energy>;
    energiesSub: Subscription;
    
    optionsYears: Options;
    minYear: number = 1980; // Place le curseur.
    maxYear: number = 2015;// Mettre un dateTime.

    optionsKms: Options;
    minKms: number = 30000; // Place le curseur.
    maxKms: number = 100000;// Mettre un dateTime.
    
    optionsPrice: Options;
    minPrice: number = 15000; // Place le curseur.
    maxPrice: number = 80000;// Mettre un dateTime.

    
    constructor(
        private brandService: BrandService,
        private modelService: ModelService,
        private energyService: EnergyService,
        private formBuilder: FormBuilder, 
        private adService: AdService,    
        private router: Router,    
    ) { }

    ngOnInit(): void {
        this.initSubs();
        this.brandService.getBrands();
        this.energyService.getEnergies();
        this.initSlider();
        this.initForm();
    }

    private initForm(): void {
        this.carsForm = this.formBuilder.group({
            brandId:  [''],
            model:    [''],
            energy:   [''],
            minYear:  [''],
            maxYear:  [''],
            minKms:   [''],
            maxKms:   [''],
            minPrice: [''],
            maxPrice: [''],
        });
    }
    
    onSubmitSearchCars(): void {
        const criteriaCars = new Map();

        // Todo : 
            // - mettre id pr model et energy.
            // - condi° si pas de valeur ds les champs.
        
        criteriaCars.set('marqueId', this.carsForm.value.brandId);
        criteriaCars.set('modele', this.carsForm.value.model);
        criteriaCars.set('carburant', this.carsForm.value.energy);
        criteriaCars.set('min_year', this.minYear);
        criteriaCars.set('max_year', this.maxYear);
        criteriaCars.set('min_kms', this.minKms);
        criteriaCars.set('max_kms', this.maxKms);
        criteriaCars.set('min_price', this.minPrice);
        criteriaCars.set('max_price', this.maxPrice);

        this.adService.adsCarsByCriteria(criteriaCars, 1)
        .then(() =>{
            this.router.navigate(['research/cars']);
        })
        .catch(() => {

        });
    }

    initSlider(){
        this.optionsYears = {
            floor: 1975,
            step: 1,
            ceil: 2021, 
            translate: (value: number, label: LabelType): string => {
              switch (label) {
                case LabelType.Low:
                  return "<b>Min:</b> " + value;
                case LabelType.High:
                  return "<b>Max:</b> " + value;
                default:
                  return "" + value;
              }
            }
        };

        this.optionsKms = {
            floor: 10000,
            step: 500,
            ceil: 1000000, 
            translate: (value: number, label: LabelType): string => {
              switch (label) {
                case LabelType.Low:
                  return "<b>Min:</b> " + value + " kms";
                case LabelType.High:
                  return "<b>Max:</b> " + value + " kms";
                default:
                  return "" + value;
              }
            }
        };

        this.optionsPrice = {
            floor: 5000,
            step: 500,
            ceil: 100000, 
            translate: (value: number, label: LabelType): string => {
              switch (label) {
                case LabelType.Low:
                  return "<b>Min:</b> " + value + " €";
                case LabelType.High:
                  return "<b>Max:</b> " + value + " €";
                default:
                  return "" + value;
              }
            }
        };
    }

    initSubs(){
        this.brandsSub = this.brandService.brands.subscribe(
            (brands: Array<Brand>) => this.brands = brands
        );

        this.modelsSub = this.modelService.models.subscribe(
            (models: Array<Model>) => this.models = models
        );
   
        this.modelsByBrandSub = this.modelService.models.subscribe(
            (modelsByBrand: Array<Model>) => this.modelsByBrand = modelsByBrand
        );

        this.energiesSub = this.energyService.energies.subscribe(
            (energies: Array<Energy>) => this.energies = energies
        );

        this.selectValueModelSub = this.modelService.selectValueModel.subscribe(
            (selectValueModel: boolean) => this.selectValueModel = selectValueModel
        );
    }

    onChangeRecoveryBrand(e){
        this.modelService.getModelsByBrand(e.target.value);
    }

    ngOnDestroy(): void {
        this.brandsSub.unsubscribe();
        this.modelsSub.unsubscribe();
        this.energiesSub.unsubscribe();
        this.modelsByBrandSub.unsubscribe();
    }

}
