import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {
  url = "http://localhost/student-manager/php";
  constructor(private http:HttpClient) { }
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
}
