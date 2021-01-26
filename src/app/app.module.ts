import { UserGuard } from './services/security/guards/user/user.guard';
import { AuthGuard } from './services/security/guards/auth/auth.guard';
import { AuthService } from './services/security/auth/auth.service';
import { ProfessionalService } from './services/professional/professional.service';
import { ModelService } from './services/model/model.service';
import { EnergyService } from './services/energy/energy.service';
import { BrandService } from './services/brand/brand.service';
import { AdService } from './services/ad/ad.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsViewComponent } from './views/cars/cars-view/cars-view.component';
import { HomeViewComponent } from './views/home/home-view/home-view.component';
import { SingleCarViewComponent } from './views/cars/single-car-view/single-car-view.component';
import { ResearchCarsViewComponent } from './views/cars/research-cars-view/research-cars-view.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagingCarComponent } from './components/car/paging-car/paging-car.component';
import { ResearchBarCarComponent } from './components/car/research-bar-car/research-bar-car.component';
import { CardCarComponent } from './components/car/card-car/card-car.component';
import { LogoHomeHeaderComponent } from './components/header/logo-home-header/logo-home-header.component';
import { CardAccountHeaderComponent } from './components/header/card-account-header/card-account-header.component';
import { KnowUsComponent } from './components/footer/info-site/know-us/know-us.component';
import { UsedComponent } from './components/footer/info-site/used/used.component';
import { ServicesComponent } from './components/footer/info-site/services/services.component';
import { CguComponent } from './components/footer/obligatory-mentions/cgu/cgu.component';
import { CgvComponent } from './components/footer/obligatory-mentions/cgv/cgv.component';
import { LegalNoticeComponent } from './components/footer/obligatory-mentions/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './components/footer/obligatory-mentions/privacy-policy/privacy-policy.component';
import { IconsComponent } from './components/footer/icons/icons/icons.component';
import { AuthViewComponent } from './views/auth/auth-view/auth-view.component';
import { ErrorComponent } from './views/errors/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoPageHeaderComponent } from './components/header/info-page-header/info-page-header.component';
import { InfoSiteComponent } from './components/footer/info-site/info-site.component';
import { ObligatoryMentionsComponent } from './components/footer/obligatory-mentions/obligatory-mentions.component';




@NgModule({
    declarations: [
        AppComponent,
        CarsViewComponent,
        HomeViewComponent,
        SingleCarViewComponent,
        ResearchCarsViewComponent,
        HeaderComponent,
        FooterComponent,
        PagingCarComponent,
        ResearchBarCarComponent,
        CardCarComponent,
        CardAccountHeaderComponent,
        KnowUsComponent,
        UsedComponent,
        ServicesComponent,
        CguComponent,
        CgvComponent,
        LegalNoticeComponent,
        PrivacyPolicyComponent,
        IconsComponent,
        AuthViewComponent,
        ErrorComponent,
        LogoHomeHeaderComponent,
        InfoPageHeaderComponent,
        InfoSiteComponent,
        ObligatoryMentionsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        AdService, 
        BrandService, 
        EnergyService, 
        ModelService, 
        ProfessionalService, 
        AuthService,
        AuthGuard,
        UserGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
