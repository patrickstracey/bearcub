import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { OverviewComponent } from './customers/overview/overview.component';
import { FamilyDetailComponent } from './customers/family-detail/family-detail.component';
import { BusinessComponent } from './settings/business/business.component';
import { ClassesComponent } from './settings/classes/classes.component';
import { OfferingsComponent } from './settings/offerings/offerings.component';
import { GeneratorComponent } from './payment-plan/generator/generator.component';
import { LoginComponent } from './auth/login/login.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OverviewComponent,
    FamilyDetailComponent,
    BusinessComponent,
    ClassesComponent,
    OfferingsComponent,
    GeneratorComponent,
    LoginComponent,
    ToolbarComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
