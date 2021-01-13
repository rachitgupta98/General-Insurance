import { Observable } from "rxjs";
import PolicyInfo from "src/app/_models/PolicyInfo";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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
}
