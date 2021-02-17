import { ResearchCarsViewComponent } from './views/cars/research-cars-view/research-cars-view.component';
import { HomeViewComponent } from './views/home/home-view/home-view.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeViewComponent},
  {path: 'research/cars', component: ResearchCarsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
