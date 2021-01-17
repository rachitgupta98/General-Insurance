import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimPolicyService {

  constructor(private http:HttpClient) { }
  checkStatus(claimId:number):Observable<any>{
    return this.http.get<any>("http://localhost:8080/checkStatus?claimId="+claimId);
  }
}
