import { Router } from "@angular/router";
import VehicleInfoModel from "src/app/_models/vehicleInfoModel";

import { Component, OnInit, AfterViewInit } from "@angular/core";
import { VehicleDetailsService } from "src/app/_services/vehicle-details/vehicle-details.service";

@Component({
  selector: "app-vehicle-details",
  templateUrl: "./vehicle-details.component.html",
  styleUrls: ["./vehicle-details.component.scss"],
})
export class VehicleDetailsComponent implements OnInit {
  vehicleInfoModel = new VehicleInfoModel();

  vehicleClass = ["2 Wheeler", "4 Wheeler"];

  checkRegistraionNo = false;

  constructor(
    private vehicleService: VehicleDetailsService,
    private router: Router
  ) {}

  ngOnInit() {
    //console.log(sessionStorage.getItem("regNo"));
    this.vehicleInfoModel.registrationNo = sessionStorage.getItem("regNo");

    this.vehicleService
      .fetchExistedVehicleData(sessionStorage.getItem("regNo"))
      .subscribe(
        (data) => {
          console.log(data.HttpErrorResponse.status);

          console.log("200 Ok");
          this.checkRegistraionNo = true;
          delete data.result["fuelType"];
          this.vehicleInfoModel = data.result;
          sessionStorage.setItem("existVehicleId", data.result["vehicleId"]);
        },
        (err) => {
          console.log("error2231eee" + err.status);
          this.checkRegistraionNo = false;
          sessionStorage.removeItem("existVehicleId");
        }
      );

    // this.vehicleService
    //   .fetchVehicleInfo(sessionStorage.getItem("regNo"))
    //   .subscribe((data) => {
    //     this.vehicleInfoModel.registrationNo = sessionStorage.getItem("regNo");

    //     // delete this.vdData["Fitness Upto"];
    //     // delete this.vdData["Fuel Type"];
    //     // delete this.vdData["Fuel Norms"];
    //     // delete this.vdData["Road Tax Paid Upto"];
    //     // delete this.vdData["Insurance Upto"];
    //     console.log(data);
    //   });
  }

  handleOnSubmit() {
    if (!this.checkRegistraionNo) {
      if (sessionStorage.getItem("userId") == null) {
        this.router.navigate(["/user_login"]);
        return;
      }
      this.vehicleService
        .saveVehicleInfo(this.vehicleInfoModel)
        .subscribe((data) => {
          sessionStorage.setItem("vehicleId", data.result["vehicleId"]);
          sessionStorage.setItem("model", data.result["makerModel"]);
          console.log(data.result);
        });
      this.router.navigate(["/policyForm"]);
    } else {
      this.router.navigate(["/policyDisplay"]);
    }
  }
}
