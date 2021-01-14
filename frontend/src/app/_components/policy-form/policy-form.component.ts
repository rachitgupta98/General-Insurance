import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { VehicleDetailsService } from "src/app/_services/vehicle-details/vehicle-details.service";
import { PolicyServiceService } from "./../../_services/policyService/policy-service.service";
import { Component, OnInit } from "@angular/core";
import PolicyInfo from "src/app/_models/policyInfo";
@Component({
  selector: "app-policy-form",
  templateUrl: "./policy-form.component.html",
  styleUrls: ["./policy-form.component.scss"],
})
export class PolicyFormComponent implements OnInit {
  loggesInUser;
  policyInfo = new PolicyInfo();
  vehicleName;
  thirdPartyPlanPrice = [
    {
      key: "3",
      value: "2345",
    },
    {
      key: "2",
      value: "100",
    },
    {
      key: "1",
      value: "23",
    },
  ];

  comprehensivePlanPrice = [
    {
      key: "3",
      value: "2345",
    },
    {
      key: "2",
      value: "100",
    },
    {
      key: "1",
      value: "23",
    },
  ];
  compPremium;
  year;
  yearForComprehensive;
  constructor(
    private policyService: PolicyServiceService,
    private vehicleService: VehicleDetailsService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.vehicleName = sessionStorage.getItem("model");
  }
  onHandleSubmit() {
    if (this.policyInfo.premiumAmount == null) {
      alert("no plan is selected for payment");
      return;
    } else {
      console.log(this.policyInfo.premiumAmount);
      this.year = this.thirdPartyPlanPrice.find((e) => {
        // console.log(this.compPremium + "   " + e.key + "  " + e.value);
        if (e.value === this.policyInfo.premiumAmount) {
          console.log("done");
          return e.key;
        } else {
          console.log("not found");
        }
      });

      this.policyInfo.insuranceAmount = 0;
      this.policyInfo.isExpired = false;
      this.policyInfo.planType = "Third Party";
      this.policyInfo.vehicleId = sessionStorage.getItem("vehicleId");
      this.policyInfo.userId = sessionStorage.getItem("userId");
      this.policyInfo.planYear = parseInt(this.year.key);
      console.log(this.year);
      // this.policyService.savePolicyData(this.policyInfo).subscribe((data) => {
      //   console.log(data);
      //   this._snackBar.open("Policy Registered", "Dismiss", {
      //     verticalPosition: "top",
      //     duration: 4000,
      //   });
      //   this.router.navigate(["/home"]);
      // });
      this.policyService.policyData = this.policyInfo;
      this.router.navigate(["/paymentgateway"]);
    }
  }

  onHandleSubmitComprehensive() {
    this.policyInfo.premiumAmount = this.compPremium;
    if (this.compPremium == null) {
      alert("no plan is selected for payment");
      return;
    } else {
      this.yearForComprehensive = this.comprehensivePlanPrice.find((e) => {
        // console.log(this.compPremium + "   " + e.key + "  " + e.value);
        if (e.value === this.compPremium) {
          console.log("done");
          return e.key;
        } else {
          console.log("not found");
        }
      });
      this.policyInfo.insuranceAmount = 2500;
      this.policyInfo.isExpired = false;
      this.policyInfo.planType = "Comprehensive";
      this.policyInfo.vehicleId = sessionStorage.getItem("vehicleId");
      this.policyInfo.userId = sessionStorage.getItem("userId");
      this.policyInfo.planYear = parseInt(this.yearForComprehensive.key);
      console.log(this.policyInfo.premiumAmount);
      // this.policyService.savePolicyData(this.policyInfo).subscribe((data) => {
      //   console.log(data);
      //   //alert("Policy is registered, go to payment for generating Policy Id");
      //   this._snackBar.open("Policy Registered", "Dismiss", {
      //     verticalPosition: "top",
      //     duration: 4000,
      //   });
      //   this.router.navigate(["/home"]);
      // });
      this.policyService.policyData = this.policyInfo;
      this.router.navigate(["/paymentgateway"]);
    }
  }
}
