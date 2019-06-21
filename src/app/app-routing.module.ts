import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { RedirectGuard } from './redirect.guard';

const routes: Routes = [
  { 
    path:'',
    component: LoginComponent,
    canActivate: [RedirectGuard]
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  { 
    path:'dashboard',
    canActivate: [AuthGuard],
    loadChildren:() => import('./dashboard-module/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
