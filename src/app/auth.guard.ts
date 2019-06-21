import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginSignupService } from './shared/login-signup.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router,private _user: LoginSignupService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       return this._user.isAuthenticate()
        .pipe(map(
          (data: any) => {
            console.log(data);
            if(data.status){
              return true;
            }else{
              this._router.navigate(["/"]);
              return false;
            }
          }
        ))
  }
}
