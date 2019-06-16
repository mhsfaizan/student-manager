import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { 
    path:'',
    component: LoginComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  { 
    path:'dashboard',
    loadChildren:() => import('./dashboard-module/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
