import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { VehicleDetailsService } from "src/app/_services/vehicle-details/vehicle-details.service";
import { PolicyServiceService } from "./../../_services/policyService/policy-service.service";
import { Component, OnInit } from "@angular/core";
import PolicyInfo from "src/app/_models/policyInfo";
import { ReturnStatement } from "@angular/compiler";

@Component({
  selector: "app-policy-form",
  templateUrl: "./policy-form.component.html",
  styleUrls: ["./policy-form.component.scss"],
})
export class PolicyFormComponent implements OnInit {
  loggesInUser;
  policyInfo = new PolicyInfo();
  vehicleName;
  registrationDate = sessionStorage.getItem("registrationDate");
  manufacturer = sessionStorage.getItem("manufacturer");
  finalDate;
  finalDate2;
  finalDate3;
  idvValue;
  odValue: number = 0;
  thirdPartyodValue: number = 0;
  price;
  numberOfYear;
  thirdpartyIdv;
  addonsValue = 0;
  thirdaddOnsValue = 0;
  planYear: number = 0;
  thirdplanYear: number = 0;
  thirdPremiumAmount;
  compPremium;

  addons = [
    { type: "Engine ProtectionCover", amount: 1000, checked: false },
    { type: "Tyre ProtectionCover", amount: 2000, checked: false },
    { type: "Passenger Cover", amount: 1500, checked: false },
    { type: "Driver Cover", amount: 2500, checked: false },
  ];

  thirdaddons = [
    { type: "Engine ProtectionCover", amount: 1000, checked: false },
    { type: "Tyre ProtectionCover", amount: 2000, checked: false },
    { type: "Passenger Cover", amount: 1500, checked: false },
    { type: "Driver Cover", amount: 2500, checked: false },
  ];

  vehicleCarManufacturer = [
    { model: "Ford", price: "500000" },
    { model: "Honda", price: "350000" },
    { model: "Hyundai", price: "700000" },
    { model: "Mahindra & Mahindra", price: "900000" },
    { model: "Maruti Suzuki", price: "400000" },
    { model: "Nissan", price: "600000" },
    { model: "Renault", price: "1000000" },
    { model: "Tata Motors", price: "650000" },
    { model: "Toyota", price: "700000" },
    { model: "Volkswagen", price: "700000" },
    { model: "Hero MotoCorp", price: "50000" },
    { model: "Honda Motorcycle and Scooter", price: "60000" },
    { model: "TVS Motor", price: "93000" },
    { model: "Bajaj Auto", price: "75000" },
    { model: "Yamaha Motor", price: "70000" },
    { model: "Royal Enfield", price: "60000" },
    { model: "suzuki Motorcycle", price: "80000" },
    { model: "Mahindra Two Wheeler", price: "55000" },
  ];
  constructor(
    private policyService: PolicyServiceService,
    private vehicleService: VehicleDetailsService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.vehicleName =
      sessionStorage.getItem("manufacturer") +
      " " +
      sessionStorage.getItem("model");
  }

  calculateIDV() {
    this.finalDate2 = this.registrationDate.split("-");
    this.finalDate3 = new Date(
      this.finalDate2[0],
      this.finalDate2[1],
      this.finalDate2[2],
      this.finalDate2[3]
    );
    this.numberOfYear = new Date().getFullYear() - parseInt(this.finalDate2[0]);

    let vehicle = this.vehicleCarManufacturer.find((e) => {
      if (e.model === this.manufacturer) return e.price;
    });
    this.price = parseInt(vehicle.price);


    if (this.numberOfYear <= 0) {
      this._snackBar.open("insurance not applicable", "Dismiss", {
        verticalPosition: "top",
        duration: 4000,
      });
      this.router.navigate(["/home"]);
    }
    if (this.numberOfYear == 1) {
      this.idvValue = this.price - this.price * 0.1;
      this.odValue = Math.ceil(0.0197 * this.idvValue);
    }
    if (this.numberOfYear > 1 && this.numberOfYear < 3) {
      this.idvValue = this.price - this.price * 0.15;
      this.odValue = Math.ceil(0.0197 * this.idvValue);
    }
    if (this.numberOfYear > 2 && this.numberOfYear < 10) {
      this.idvValue = this.price - this.price * 0.2;
      this.odValue = Math.ceil(0.0197 * this.idvValue);
    }
    if (this.numberOfYear >= 10) {
      this.idvValue = this.price - this.price * 0.5;
      this.odValue = Math.ceil((this.odValue = 0.0197 * this.idvValue));
    }

    this.thirdpartyIdv = 0;
    this.thirdPartyodValue = (this.idvValue * 0.0197) / 2;



  }
  thirdPartyPlanPrice = [
    {
      key: 3,
      value: 0,
      checked: false,
    },
    {
      key: 2,
      value: 0,
      checked: false,
    },
    {
      key: 1,
      value: 0,
      checked: false,
    },
  ];

  comprehensivePlanPrice = [
    {
      key: 3,
      value: 0,
      checked: false,
    },
    {
      key: 2,
      value: 0,
      checked: false,
    },
    {
      key: 1,
      value: 0,
      checked: false,
    },
  ];
  year;
  yearForComprehensive;

  selectedyear(i: number) {
    if (this.comprehensivePlanPrice[i].checked) {
      this.planYear = 0;
      this.comprehensivePlanPrice[i].checked = false;
      this.thirdplanYear = 0;
    } else {
      this.planYear = this.comprehensivePlanPrice[i].key;
      this.comprehensivePlanPrice[i].checked = true;
      for (var j = 0; j < this.comprehensivePlanPrice.length; j++) {
        if (j !== i) {
          this.comprehensivePlanPrice[j].checked = false;
        }
      }
      this.thirdplanYear = 0;
    }


  }

  thirdselected(i: number) {

    if (this.thirdPartyPlanPrice[i].checked) {
      this.thirdplanYear = 0;
      this.thirdPartyPlanPrice[i].checked = false;
      this.planYear = 0;
    } else {
      this.thirdplanYear = this.thirdPartyPlanPrice[i].key;
      this.thirdPartyPlanPrice[i].checked = true;
      for (var j = 0; j < this.thirdPartyPlanPrice.length; j++) {
        if (j !== i) {
          this.thirdPartyPlanPrice[j].checked = false;
        }
      }
      this.planYear = 0;
    }
  }

  compaddonsAmount(i: number) {
    if (this.addons[i].checked) {
      this.addonsValue = this.addonsValue - this.addons[i].amount;
      this.addons[i].checked = false;
    } else {
      this.addonsValue = this.addonsValue + this.addons[i].amount;
      this.addons[i].checked = true;
    }
  }
  thirdaddonsAmount(i: number) {
    if (this.thirdaddons[i].checked) {
      this.thirdaddOnsValue = this.thirdaddOnsValue - this.thirdaddons[i].amount;
      this.thirdaddons[i].checked = false;
    } else {
      this.thirdaddOnsValue = this.thirdaddOnsValue + this.thirdaddons[i].amount;
      this.thirdaddons[i].checked = true;
    }


  }
  ngOnInit() {
    if (sessionStorage.getItem("check") == "true") {
      this.router.navigate(["/home"]);
    }
    if (sessionStorage.getItem("pay") == "onPay") {
      this.router.navigate(["/home"]);
    }

    this.calculateIDV();
  }

  onHandleSubmit() {
    this.thirdPremiumAmount =
      (this.thirdPartyodValue + 450 + this.thirdaddOnsValue) * this.thirdplanYear +
      (this.thirdPartyodValue + 450 + this.thirdaddOnsValue) *
      this.thirdplanYear *
      0.18;
    this.thirdPartyPlanPrice.forEach((e) => {
      if (e.key == this.thirdplanYear) e.value = this.thirdPremiumAmount;
    });

    this.policyInfo.premiumAmount = this.thirdPremiumAmount;
    if (this.thirdplanYear == 0) {
      alert("no plan is selected for third party");
      return;
    } else {

      this.year = this.thirdPartyPlanPrice.find((e) => {

        if (e.value === this.policyInfo.premiumAmount) {

          return e.key;
        } else {

        }
      });
      this.policyInfo.policyId = sessionStorage.getItem("policyId");

      if (sessionStorage.getItem("policyId") == null) {
        this.policyInfo.policyId = 0;
      }

      this.policyInfo.insuranceAmount = 0;
      this.policyInfo.isExpired = false;
      this.policyInfo.planType = "Third Party";
      this.policyInfo.vehicleId = sessionStorage.getItem("vehicleId");
      this.policyInfo.userId = sessionStorage.getItem("userId");
      this.policyInfo.planYear = parseInt(this.year.key);

      this.policyService.policyData = this.policyInfo;
      this.router.navigate(["/paymentgateway"]);
    }
  }

  onHandleSubmitComprehensive() {
    this.compPremium = (
      (this.odValue + this.addonsValue) * this.planYear +
      (this.odValue + this.addonsValue) * this.planYear * 0.18
    ).toFixed(2);

    this.comprehensivePlanPrice.forEach((e) => {
      if (e.key == this.planYear) e.value = this.compPremium;
    });

    this.policyInfo.premiumAmount = this.compPremium;
    if (this.planYear == 0) {
      alert("no plan is selected for comprehensive");
      return;
    } else {
      this.yearForComprehensive = this.comprehensivePlanPrice.find((e) => {

        if (e.value === this.compPremium) {

          return e.key;
        } else {

        }
      });
      this.policyInfo.policyId = sessionStorage.getItem("policyId");
      if (sessionStorage.getItem("policyId") == null) {
        this.policyInfo.policyId = 0;
      }

      this.policyInfo.insuranceAmount = this.idvValue;
      this.policyInfo.isExpired = false;
      this.policyInfo.planType = "Comprehensive";
      this.policyInfo.vehicleId = sessionStorage.getItem("vehicleId");
      this.policyInfo.userId = sessionStorage.getItem("userId");
      this.policyInfo.planYear = parseInt(this.yearForComprehensive.key);

      this.policyService.policyData = this.policyInfo;
      this.router.navigate(["/paymentgateway"]);
    }
  }
}
