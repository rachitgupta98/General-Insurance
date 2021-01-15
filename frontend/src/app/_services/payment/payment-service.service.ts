import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PaymentServiceService {
  constructor(private http: HttpClient) {}

  public paymentGateway(payInfo): Observable<any> {
    return this.http.post<any>(
      "http://localhost:8080/insurance/policy/payment",
      payInfo
    );
  }
}
