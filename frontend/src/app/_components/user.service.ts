import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
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
}
