import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginSignupService } from '../shared/login-signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show = false;
  signIn:FormGroup;
  isActive = false;

  constructor(private loginService:LoginSignupService,private _router:Router) { }

  ngOnInit() {
    this.signIn = new FormGroup(
      {
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required) 
      }
    )
  }

  login() {
    this.isActive = true;
    this.loginService.login(this.signIn)
      .subscribe(
        (data:any) => {
          console.log(data);
          this.isActive = false;
          if(data.status){
            this.loginService.showSnackbar(data.message);
            sessionStorage.setItem("user",JSON.stringify({username: data.data.username,token:data.data.token}));
            setTimeout(()=>this._router.navigate(["/dashboard"]),2500);
          }else{
            this.loginService.showSnackbar(data.message);
            setTimeout(()=>this._router.navigate(["/dashboard"]),2500)
          }
        },
        (error) => {
          this.loginService.showSnackbar("Server error please contact to web admin.");
          this.isActive = false;
          console.log(error);
        }
      )
  }

}
