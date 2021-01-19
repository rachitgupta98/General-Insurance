import { PaymentServiceService } from "./../../_services/payment/payment-service.service";
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
  btnDisable = false;
  constructor(
    private policyService: PolicyServiceService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private paymentService: PaymentServiceService
  ) {
    this.payInfo.userId = sessionStorage.getItem("userId");
    this.userName = sessionStorage.getItem("userName");
    this.payInfo.paymentAmount = policyService.policyData["premiumAmount"];
    this.planType = policyService.policyData["planType"];
    this.planYear = policyService.policyData["planYear"];
    this.amount = policyService.policyData["premiumAmount"];
    this.regNo = sessionStorage.getItem("regNo");

  }

  ngOnInit() {
    sessionStorage.setItem("pay", "onPay");
    if (sessionStorage.getItem("userId") == null) {
      this.router.navigate(["/user_login"]);
      return;
    }
    if (sessionStorage.getItem('downcheck') === "down") {
      this.router.navigate(['/home'])
    }
  }

  payment() {
    this.policyService
      .savePolicyData(this.policyService.policyData)
      .subscribe((data) => {

        if (data.result != null) {
          this.payInfo.userId = sessionStorage.getItem("userId");
          this.payInfo.policyId = data.result["policyId"];
          this.payInfo.paymentAmount = data.result["premiumAmount"];
          sessionStorage.setItem(
            "policyIdForDownload",
            data.result["policyId"]
          );
          this.paymentService.paymentGateway(this.payInfo).subscribe((res) => {

            if (res.result != null) {
              this.btnDisable = true;
              sessionStorage.setItem("check", "true");
            }
          });
          this._snackBar.open("Policy Registered", "Dismiss", {
            verticalPosition: "top",
            duration: 4000,
          });

        }
      });
  }

  download() {
    sessionStorage.setItem('downcheck', "down")
    this.router.navigate(["/downloads"]);
  }
}
