import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BusinessComponent } from './settings/business/business.component';
import { ClassesComponent } from './settings/classes/classes.component';
import { OfferingsComponent } from './settings/offerings/offerings.component';
import { OverviewComponent } from './customers/overview/overview.component';
import { GeneratorComponent } from './payment-plan/generator/generator.component';
import { FamilyDetailComponent } from './customers/family-detail/family-detail.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'family/detail', component: FamilyDetailComponent },
  { path: 'family', component: OverviewComponent },
  { path: 'plans', component: GeneratorComponent },
  { path: 'settings/business-info', component: BusinessComponent },
  { path: 'settings/classes', component: ClassesComponent },
  { path: 'settings/offerings', component: OfferingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
