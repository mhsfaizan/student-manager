import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginSignupService } from '../shared/login-signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private loginService: LoginSignupService) { }
  selected = "Executive";
  signUp: FormGroup;
  isActive = false;
  ngOnInit() {
    this.signUp = new FormGroup(
      {
        name: new FormControl('',Validators.required),
        email: new FormControl('',Validators.required),
        phone: new FormControl('',Validators.required),
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required) 
      }
    )
  }

  signup() {
    this.isActive = true;
    this.loginService.signup(this.signUp)
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
