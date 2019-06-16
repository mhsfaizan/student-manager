import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';

import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, NavigationComponent, RegisterComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    SharedModule
  ]
})
export class DashboardModule { }
