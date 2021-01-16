import { Router } from "@angular/router";
import VehicleInfoModel from "src/app/_models/vehicleInfoModel";

import { Component, OnInit, AfterViewInit } from "@angular/core";
import { VehicleDetailsService } from "src/app/_services/vehicle-details/vehicle-details.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-vehicle-details",
  templateUrl: "./vehicle-details.component.html",
  styleUrls: ["./vehicle-details.component.scss"],
})
export class VehicleDetailsComponent implements OnInit {
  vehicleInfoModel = new VehicleInfoModel();

  vehicleClass = ["2 Wheeler", "4 Wheeler"];

  checkRegistraionNo = false;

  minDate: Date;
  maxDate: Date;
  constructor(
    private vehicleService: VehicleDetailsService,
    private router: Router
  ) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear, currentMonth, currentDay);
  }

  ngOnInit() {
    //console.log(sessionStorage.getItem("regNo"));
    this.vehicleInfoModel.registrationNo = sessionStorage.getItem("regNo");
    this.vehicleService
      .fetchExistedVehicleData(sessionStorage.getItem("regNo"))
      .subscribe(
        (data) => {
          console.log(data);
          if (data.result != null) {
            console.log("200 Ok");
            this.checkRegistraionNo = true;
            delete data.result["fuelType"];
            this.vehicleInfoModel = data.result;
            sessionStorage.setItem("vehicleId", data.result["vehicleId"]);
            sessionStorage.setItem("model", data.result["makerModel"]);
          } else {
            this.checkRegistraionNo = false;
          }
        },
        (err) => {
          console.log("error2231eee" + err.status);
          this.checkRegistraionNo = false;
          sessionStorage.removeItem("vehicleId");
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

  handleOnSubmit(f: NgForm) {
    
    if (!this.checkRegistraionNo) {
      if (sessionStorage.getItem("userId") == null) {
        this.router.navigate(["/user_login"]);
        return;
      }
      if (f.valid) {
        this.vehicleService
          .saveVehicleInfo(this.vehicleInfoModel)
          .subscribe((data) => {
            sessionStorage.setItem("vehicleId", data.result["vehicleId"]);
            sessionStorage.setItem("model", data.result["makerModel"]);
            console.log(data.result);
          });
        this.router.navigate(["/policyForm"]);
      }
    } else {
      this.router.navigate(["/policyDisplay"]);
    }
  }
}
