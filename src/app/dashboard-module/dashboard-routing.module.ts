import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { RegisterComponent } from './register/register.component';


const routes:Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      { path:'',component:HomeComponent},
      { path:'register',component:RegisterComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }
