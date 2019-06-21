import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {
  url = "http://localhost/student-manager/php";
  constructor(private http:HttpClient,private _snackBar: MatSnackBar,private router: Router) { }
  toFormData(data:any) {
    let fd = new FormData();
    for(let i in data){
      fd.append(i,data[i]);
    }
    return fd;
  }
  signup(student:FormGroup) {
    let formData = this.toFormData(student.value);
    return this.http.post(this.url+"/register.php",formData);
  }

  login(student:FormGroup) {
    let formdata  = this.toFormData(student.value);
    return  this.http.post(this.url+"/login.php",formdata);
  }


  showSnackbar(message:string) {
      this._snackBar.open(message,'ok',{
        duration:2000
      });
  }


  isAuthenticate() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    let fd = this.toFormData(user);
    return this.http.post(this.url+"/authenticate.php",fd);
  }

  logout(){
    sessionStorage.removeItem("user");
    this.router.navigate(["/"]);
  }
}
