import { Observable } from "rxjs";
import PolicyInfo from "src/app/_models/PolicyInfo";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PolicyServiceService {
  policyData = {};
  constructor(private http: HttpClient) {
    console.log(this.policyData);
  }

  savePolicyData(policy): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/insurance/buyPolicy`,
      policy
    );
  }

    findPolicyData(userId:number):Observable<any>{
      return this.http.get<any>("http://localhost:8080/insurance/policies/"+userId);
    }
    policyToRenew(policyId:number,userId:number):Observable<any>{
      return this.http.get<any>("http://localhost:8080/insurance/renewPolicy/?policyId="+policyId+"&userId="+userId);
    }

    downloadPolicyByPolicyId(policyId):Observable<any>{
      return this.http.get<any>(`http://localhost:8080/insurance/policy/downloads?policyId=${policyId}`)
    }
}
