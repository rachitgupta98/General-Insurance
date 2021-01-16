import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClaimPolicyService {

  constructor(private http: HttpClient) {
    
   }

   fetchapprovedclaims():Observable<any>{
    let url="http://localhost:8080/totalclaims";
    return this.http.get<any>(url);
  }
  fetchpolicies():Observable<any>{
    let url="http://localhost:8080/totalpolicies";
    return this.http.get<any>(url);
  }
  fetchAllclaims():Observable<any>{
    let url="http://localhost:8080/viewClaims";
    return this.http.get<any>(url);
  }
}
