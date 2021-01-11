import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../_models/sample/user'
// import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  // login(login: Login) : Observable<any> {
  //   let url = "http://localhost:8080/login";
  //  return this.http.post(url, login); 
  // }

  registration(user:User):Observable<any>{
    let url="http://localhost:8080/addorUpdateUser";
    return this.http.post(url,user);
  }
}
