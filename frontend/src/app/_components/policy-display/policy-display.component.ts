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
  policData = {};
  numberOfDaysLeft;
  numberOfMonthLeft;
  numberOfYearLeft;
  endDate;
  date2;
  finalDate1;
  finalDate2;

  constructor(
    private vehicleService: VehicleDetailsService,
    private router: Router
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem("userId") == null) {
      this.router.navigate(["/user_login"]);
    } else {
      this.vehicleService
        .fetchPolicyByVehcileId(sessionStorage.getItem("vehicleId"))
        .subscribe(
          (data) => {

            if (data.result != null) {

              delete data.result.claims;
              delete data.result.user;
              delete data.result.vehicle;
              this.policData = data.result;



              this.endDate = data.result["policyEndDate"];
              this.date2 = this.endDate.split("-");
              this.finalDate2 = new Date(
                this.date2[0],
                this.date2[1],
                this.date2[2]
              );
              this.numberOfYearLeft = this.date2[0] - new Date().getFullYear();
              this.numberOfMonthLeft = this.date2[1] - new Date().getMonth();
              this.numberOfDaysLeft = this.date2[2] - new Date().getDate();

            } else {
              this.router.navigate(["/policyForm"]);
            }
          },
          (err) => {
            this.router.navigate(["/policyForm"]);
          }
        );
    }
  }
}
