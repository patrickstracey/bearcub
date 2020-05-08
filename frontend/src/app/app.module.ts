import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ChartistModule } from 'ng-chartist';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FamilyOverviewComponent } from './customers/family-overview/family-overview.component';
import { FamilyDetailComponent } from './customers/family-detail/family-detail.component';
import { BusinessComponent } from './settings/business/business.component';
import { ClassesComponent } from './settings/classes/classes.component';
import { OfferingsComponent } from './settings/offerings/offerings.component';
import { GeneratorComponent } from './payment-plan/generator/generator.component';
import { LoginComponent } from './auth/login/login.component';
import { ToolbarComponent } from './_navigation/toolbar/toolbar.component';
import { SidenavListComponent } from './_navigation/sidenav-list/sidenav-list.component';
import { FormsModule } from '@angular/forms';
import { PlanChartComponent } from './shared/plan-chart/plan-chart.component';
import { BasemodalComponent } from './shared/modal/basemodal/basemodal.component';
import { StudentOverviewComponent } from './customers/student-overview/student-overview.component';
import { StudentDetailComponent } from './customers/student-detail/student-detail.component';
import { StaffOverviewComponent } from './staff/staff-overview/staff-overview.component';
import { RoomOverviewComponent } from './rooms/room-overview/room-overview.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';
import { CheckinOverviewComponent } from './checkins/checkin-overview/checkin-overview.component';
import { ClassDetailComponent } from './school/class-detail/class-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FamilyOverviewComponent,
    FamilyDetailComponent,
    StudentOverviewComponent,
    BusinessComponent,
    ClassesComponent,
    OfferingsComponent,
    GeneratorComponent,
    LoginComponent,
    ToolbarComponent,
    SidenavListComponent,
    PlanChartComponent,
    BasemodalComponent,
    StudentDetailComponent,
    StaffOverviewComponent,
    RoomOverviewComponent,
    StaffDetailsComponent,
    CheckinOverviewComponent,
    ClassDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ChartistModule
  ],
  entryComponents: [BasemodalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
