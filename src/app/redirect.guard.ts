import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginSignupService } from './shared/login-signup.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(private _user: LoginSignupService,private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._user.isAuthenticate()
      .pipe(map(
        (data: any) => {
          if(data.status){
            this._router.navigate(["/dashboard"]);
            return false;
          }else{
            return true;
          }
        }
      )) ;
  }
  
}
