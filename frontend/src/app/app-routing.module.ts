import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BusinessComponent } from './settings/business/business.component';
import { ClassesComponent } from './settings/classes/classes.component';
import { OfferingsComponent } from './settings/offerings/offerings.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'settings/business-info', component: BusinessComponent },
  { path: 'settings/classes', component: ClassesComponent },
  { path: 'settings/offerings', component: OfferingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
