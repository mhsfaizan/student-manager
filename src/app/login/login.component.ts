import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginSignupService } from '../shared/login-signup.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show = false;
  signIn:FormGroup;
  isActive = false;

  constructor(private loginService:LoginSignupService) { }

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
          this.isActive = false;
          console.log(data);
        },
        (error) => {
          this.isActive = false;
          console.log(error);
        }
      )
  }

}
