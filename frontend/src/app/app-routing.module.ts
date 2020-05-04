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
import { StudentDetailComponent } from './customers/student-detail/student-detail.component';
import { StaffOverviewComponent } from './staff/staff-overview/staff-overview.component';
import { RoomOverviewComponent } from './rooms/room-overview/room-overview.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';
import { CheckinOverviewComponent } from './checkins/checkin-overview/checkin-overview.component';
import { ClassDetailComponent } from './school/class-detail/class-detail.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'checkins', component: CheckinOverviewComponent },
  { path: 'family/detail', component: FamilyDetailComponent },
  { path: 'family', component: FamilyOverviewComponent },
  { path: 'students/detail', component: StudentDetailComponent },
  { path: 'students', component: StudentOverviewComponent },
  { path: 'plans', component: GeneratorComponent },
  { path: 'classes/detail', component: ClassDetailComponent },  
  { path: 'classes', component: ClassesComponent },
  { path: 'offerings', component: OfferingsComponent },
  { path: 'staff/detail', component: StaffDetailsComponent },
  { path: 'staff', component: StaffOverviewComponent },
  { path: 'rooms', component: RoomOverviewComponent },
  { path: 'settings/business-info', component: BusinessComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
