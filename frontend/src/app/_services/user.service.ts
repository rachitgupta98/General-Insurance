import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from '../_models/sample/user'
 import { Login } from '../_components/login';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  login(login: Login) : Observable<any> {
    let url = "http://localhost:8080/login";
   return this.http.post(url, login); 
  }

  registration(user:User):Observable<any>{
    let url="http://localhost:8080/addorUpdateUser";
    return this.http.post(url,user);
  }

  update(userId:number):Observable<any>{
    let url="http://localhost:8080/insurance/findUser/"

    return this.http.get<any>("http://localhost:8080/insurance/findUser/"+userId);
  }
}
