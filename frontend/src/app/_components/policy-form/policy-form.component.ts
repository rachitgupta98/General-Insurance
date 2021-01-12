import { PolicyServiceService } from "./../../_services/policyService/policy-service.service";
import { Component, OnInit } from "@angular/core";
import PolicyInfo from "src/app/_models/policyInfo";
@Component({
  selector: "app-policy-form",
  templateUrl: "./policy-form.component.html",
  styleUrls: ["./policy-form.component.scss"],
})
export class PolicyFormComponent implements OnInit {
  policyInfo = new PolicyInfo();
  thirdPartyPlanPrice = [
    {
      key: "3 years",
      value: "2345",
    },
    {
      key: "2 years",
      value: "100",
    },
    {
      key: "1 years",
      value: "23",
    },
  ];

  comprehensivePlanPrice = [
    {
      key: "3 years",
      value: "2345",
    },
    {
      key: "2 years",
      value: "100",
    },
    {
      key: "1 years",
      value: "23",
    },
  ];
  compPremium;
  constructor(private policyService: PolicyServiceService) {}

  ngOnInit() {}
  onHandleSubmit() {
    this.policyInfo.insuranceAmount = 0;
    this.policyInfo.isExpired = false;
    this.policyInfo.planType = "Third Party";
    this.policyInfo.vehicleId = sessionStorage.getItem("regNo");
    //this.policyInfo.vehicleId=sessionStorage.getItem("userId");
    console.log(this.policyInfo.premiumAmount);
    this.policyService.savePolicyData(this.policyInfo).subscribe((data) => {
      console.log(data);
    });
  }

  onHandleSubmitComprehensive() {
    this.policyInfo.insuranceAmount = 0;
    this.policyInfo.isExpired = false;
    this.policyInfo.planType = "Comprehensive";
    this.policyInfo.vehicleId = sessionStorage.getItem("regNo");
    //this.policyInfo.vehicleId=sessionStorage.getItem("userId");
    console.log(this.policyInfo.premiumAmount);
    this.policyService.savePolicyData(this.policyInfo).subscribe((data) => {
      console.log(data);
    });
  }
}
