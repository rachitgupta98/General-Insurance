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

  checkForDisable = false;

  vehicleFuelType = ["Petrol", "Diesel"];
  vehicleClass = ["2 Wheeler", "4 Wheeler"];
  vehicleCarManufacturer = [
    "Ford",
    "Honda",
    "Hyundai",
    "Mahindra & Mahindra",
    "Maruti Suzuki",
    "Nissan",
    "Renault",
    "Tata Motors",
    "Toyota",
    "Volkswagen",
  ];
  vehicleBikeManufacturer = [
    "Hero MotoCorp",
    "Honda Motorcycle and Scooter",
    "TVS Motor",
    "Bajaj Auto",
    "Yamaha Motor",
    "Royal Enfield",
    "Suzuki Motorcycle",
    "Mahindra Two Wheelers",
  ];
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

    this.vehicleInfoModel.registrationNo = sessionStorage.getItem("regNo");
    this.vehicleService
      .fetchExistedVehicleData(sessionStorage.getItem("regNo"))
      .subscribe(
        (data) => {

          if (data.result != null) {

            this.checkRegistraionNo = true;

            this.vehicleInfoModel = data.result;
            this.checkForDisable = true;
            sessionStorage.setItem("vehicleId", data.result["vehicleId"]);
            sessionStorage.setItem("manufacturer", data.result["manufacturer"]);
            sessionStorage.setItem(
              "registrationDate",
              data.result["registrationDate"]
            );
            sessionStorage.setItem("model", data.result["model"]);
          } else {
            this.checkRegistraionNo = false;
          }
        },
        (err) => {

          this.checkRegistraionNo = false;
          sessionStorage.removeItem("vehicleId");
        }
      );
  }

  async handleOnSubmit(f: NgForm) {
    if (!this.checkRegistraionNo) {
      if (sessionStorage.getItem("userId") == null) {
        this.router.navigate(["/user_login"]);
        return;
      }
      if (f.valid) {
        await this.vehicleService
          .saveVehicleInfo(this.vehicleInfoModel)
          .subscribe((data) => {

            sessionStorage.setItem("vehicleId", data.result["vehicleId"]);
            sessionStorage.setItem("manufacturer", data.result["manufacturer"]);
            sessionStorage.setItem("model", data.result["model"]);
            sessionStorage.setItem(
              "registrationDate",
              data.result["registrationDate"]
            );
            if (data.status == 200) {
              this.router
                .navigate(["/policyForm"])
            }
          });

      } else {
        alert("enter all details");
      }
    } else {
      this.router.navigate(["/policyDisplay"]);
    }
  }
}
