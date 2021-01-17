import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Claim } from 'src/app/_models/sample/claim';
import adminApprove from 'src/app/_models/adminApprove';
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

  updateClaimstatus(claimapproval:adminApprove):Observable<any>{
    let url="http://localhost:8080/updateclaim";
    return this.http.post<any>(url,claimapproval);
  }
  fetchClaimbyId(claimId:number):Observable<any>{
    return this.http.get<any>("http://localhost:8080/claim/"+claimId);
  }
}
