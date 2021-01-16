import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import adminDto from '../_models/adminDto';
@Injectable({
    providedIn: 'root'
  })

  export class adminService
  {
    constructor(private http: HttpClient){

    }

    adminlogin(adminDto:adminDto):Observable<any>
    {
        let url="http://localhost:8080/adminlogin";
        return this.http.post<any>(url,adminDto);

    }
  }