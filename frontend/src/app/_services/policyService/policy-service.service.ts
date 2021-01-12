import { Observable } from "rxjs";
import PolicyInfo from "src/app/_models/PolicyInfo";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PolicyServiceService {
  constructor(private http: HttpClient) {}

  savePolicyData(policy: PolicyInfo): Observable<PolicyInfo> {
    return this.http.post<PolicyInfo>(
      `http://localhost:8080/insurance/buyPolicy`,
      policy
    );
  }
}
