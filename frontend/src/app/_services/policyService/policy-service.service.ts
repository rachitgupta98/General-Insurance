import { Observable } from "rxjs";
import PolicyInfo from "src/app/_models/PolicyInfo";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Policy from "src/app/_models/Policy";

@Injectable({
  providedIn: "root",
})
export class PolicyServiceService {
  constructor(private http: HttpClient) {}

  savePolicyData(policy: PolicyInfo): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/insurance/buyPolicy`,
      policy
    );
  }

    findPolicyData(userId:number):Observable<any>{
      return this.http.get<any>("http://localhost:8080/insurance/policies/"+userId);

      
    }

}
