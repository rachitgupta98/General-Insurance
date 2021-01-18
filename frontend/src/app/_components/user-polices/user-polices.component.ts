import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//import { Session } from "src/app/_services/SessionValues";

import Policy from "src/app/_models/Policy";
import { PolicyServiceService } from "src/app/_services/policyService/policy-service.service";

@Component({
  selector: "app-user-polices",
  templateUrl: "./user-polices.component.html",
  styleUrls: ["./user-polices.component.scss"],
})
export class UserPolicesComponent implements OnInit {
  policy: Policy[] = [];

  show: { [key: number]: boolean } = {};

  days: number[] = [];

  userId: any = sessionStorage.getItem("userId");
  //session:Session;
  constructor(
    private router: Router,
    private policyService: PolicyServiceService
  ) {
    // console.log(sessionStorage.getItem('userId'))
    // if(sessionStorage.getItem('userId')==null)
    // {
    //   this.router.navigate(['/user_login'])
    // }
    // else{
    //   console.log("userID...",this.userId)
    //   policies.findPolicyData(this.userId).subscribe(response=>{
    //     console.log(response,"responseee....")
    //      this.policy =response.result
    //   })
    // }
  }

  ngOnInit() {
    sessionStorage.removeItem("policyId");
    if (this.userId == null) {
      this.router.navigate(["/user_login"]);
    } else {
      this.findData()

    }
  }

  findData() {
    this.policyService.findPolicyData(this.userId).subscribe((data) => {
      this.policy = data.result;
      console.log(data.result);
    });
  }
  Open(index: number) {
    if (this.show[index] === true) {
      this.show[index] = false;
    } else {
      this.show[index] = true;
    }
  }
  async renew(policyId) {
    sessionStorage.setItem("policyId", policyId);
    await this.policyService.downloadPolicyByPolicyId(policyId).subscribe(data => {
      console.log("data", data)
      sessionStorage.setItem("vehicleId", data.result.vehicle.vehicleId);
      sessionStorage.setItem("manufacturer", data.result.vehicle.manufacturer);
      sessionStorage.setItem("model", data.result.vehicle.model);
      sessionStorage.setItem(
        "registrationDate",
        data.result.vehicle.registrationDate
      );
      if (data.status == 200) {
        this.router.navigate(["/policyForm"]);
      }
    })


  }
}
