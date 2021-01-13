import { Router } from "@angular/router";
import { VehicleDetailsService } from "src/app/_services/vehicle-details/vehicle-details.service";
import PolicyInfo from "src/app/_models/policyInfo";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-policy-display",
  templateUrl: "./policy-display.component.html",
  styleUrls: ["./policy-display.component.scss"],
})
export class PolicyDisplayComponent implements OnInit {
  policData = [{}];
  policyId;
  constructor(
    private vehicleService: VehicleDetailsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.vehicleService
      .fetchPolicyByVehcileId(sessionStorage.getItem("existVehicleId"))
      .subscribe(
        (data) => {
          console.log(data.status);
          console.log("Bro");
          delete data.result.claims;
          delete data.result.user;
          delete data.result.vehicle;
          this.policData = data.result;
          console.log(data);
          this.policyId = this.policData["policyId"];
          console.log(this.policData);
        }, //}
        (err) => {
          this.router.navigate(["/policyForm"]);
        }
      );
  }
}
