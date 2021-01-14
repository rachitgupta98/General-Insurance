import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { PolicyServiceService } from "src/app/_services/policyService/policy-service.service";
import PaymentInfo from "src/app/_models/paymentInfo";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  payInfo = new PaymentInfo();
  userName;
  amount;
  planType;
  planYear;
  regNo;
  constructor(
    private policyService: PolicyServiceService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.payInfo.userId = sessionStorage.getItem("userId");
    this.userName = sessionStorage.getItem("userName");
    this.payInfo.paymentAmount = policyService.policyData["premiumAmount"];
    this.planType = policyService.policyData["planType"];
    this.planYear = policyService.policyData["planYear"];
    this.amount = policyService.policyData["premiumAmount"];
    this.regNo = sessionStorage.getItem("regNo");
    console.log(policyService.policyData);
  }

  ngOnInit() {}

  payment() {
    this.policyService
      .savePolicyData(this.policyService.policyData)
      .subscribe((data) => {
        console.log(data);
        //alert("Policy is registered, go to payment for generating Policy Id");
        this._snackBar.open("Policy Registered", "Dismiss", {
          verticalPosition: "top",
          duration: 4000,
        });
        this.router.navigate(["/home"]);
      });
  }
}
