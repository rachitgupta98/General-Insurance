import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
import { Forgotpassword } from './forgotpassword';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  login(login: Login) : Observable<any> {
    console.log(this.login);
    let url = "http://localhost:8080/login";
   
   return this.http.post(url, login); 
  }
 
  forgotpassword(forgotpassword: Forgotpassword) : Observable<any> {
    console.log(this.forgotpassword);
    let url = "http://localhost:8080/forgotPassword";
   
   return this.http.post(url, forgotpassword); 
  }

  resetpassword(resetpassword) : Observable<any> {
    console.log(this.resetpassword);
    let url = "http://localhost:8080/resetPassword";
   
   return this.http.post(url,resetpassword); 
  }

 
}
