import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BusinessComponent } from './settings/business/business.component';
import { ClassesComponent } from './settings/classes/classes.component';
import { OfferingsComponent } from './settings/offerings/offerings.component';
import { FamilyOverviewComponent } from './customers/family-overview/family-overview.component';
import { GeneratorComponent } from './payment-plan/generator/generator.component';
import { FamilyDetailComponent } from './customers/family-detail/family-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { StudentOverviewComponent } from './customers/student-overview/student-overview.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'family/detail', component: FamilyDetailComponent },
  { path: 'family', component: FamilyOverviewComponent },
  { path: 'students', component: StudentOverviewComponent },
  { path: 'plans', component: GeneratorComponent },  
  { path: 'classes', component: ClassesComponent },
  { path: 'offerings', component: OfferingsComponent },
  { path: 'settings/business-info', component: BusinessComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
