import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show = false;
  signIn:FormGroup;
  isActive = false;

  constructor() { }

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
  }

}
