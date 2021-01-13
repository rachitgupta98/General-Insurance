import { VehicleDetailsService } from "src/app/_services/vehicle-details/vehicle-details.service";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import VehicleInfoModel from "src/app/_models/vehicleInfoModel";
@Component({
  selector: "app-vehicle-home",
  templateUrl: "./vehicle-home.component.html",
  styleUrls: ["./vehicle-home.component.scss"],
})
export class VehicleHomeComponent implements OnInit {
  @Input()
  typeOfVehicle: string = "4 wheeler";
  fromgroup:FormGroup
  activeBtn1: boolean = true;
  activeBtn2: boolean = false;

  //form validations
  vehicleRegForm: FormGroup;
  submitted: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.vehicleRegForm = this.formBuilder.group({
      regNo: [
        "",
        [
          Validators.required,
          Validators.pattern("^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{1,4}$"),
          // DL 01 AA 1111

          // DL 0 AA 1111

          // DL 1 A 1111

          // DL 0 A 11

          // DL 01 AA 111
        ],
      ],
    });
  }
  getError(el) {
    switch (el) {
      case "registrationNo":
        if (this.vehicleRegForm.get("regNo").hasError("required")) {
          return "Registration Number is required";
        } else if (this.vehicleRegForm.get("regNo").hasError("pattern")) {
          return "Incorrect pattern, please check your Registration number";
        }
        break;
      default:
        return "";
    }
  }

  changeVehicle(val) {
    this.typeOfVehicle = val;
    if (val == "2 wheeler") {
      this.activeBtn1 = false;
      this.activeBtn2 = true;
    } else {
      this.activeBtn1 = true;
      this.activeBtn2 = false;
    }
  }

  //handle form submit
  goForRegistration() {
    //setting registration number in session storage
    sessionStorage.setItem("regNo", this.vehicleRegForm.value.regNo);

    this.submitted = true;
    if (this.vehicleRegForm.invalid) {
      return;
    }
    if (sessionStorage.getItem("userId") == null) {
      this.router.navigate(["/user_login"]);
      return;
    }
    console.log(this.vehicleRegForm.value.regNo);
    // this.vehicleService
    //   .fetchVehicleInfo(this.vehicleRegForm.value.regNo)
    //   .subscribe((data) => {
    //     this.vehicleInfo.ownerName = data.result["Owner Name"];
    //     this.vehicleInfo.registrationNumber = this.vehicleRegForm.value.regNo;
    //     this.vehicleInfo.registrationDate = data.result["Registration Date"];
    //     this.vehicleInfo.vehicleNameModel = data.result["Maker / Model"];
    //     this.vehicleInfo.chasisNumber = data.result["Chassis No"];
    //     this.vehicleInfo.EngineNumber = data.result["Engine No"];
    //     this.vehicleInfo.Fuel_type = data.result["Fuel Type"];
    //     this.vehicleInfo.vehicleType = data.result["Vehicle Class"];
    //     //console.log(data.result["Owner Name"]);
    //   });
    this.router.navigate(["/vehicleRegistration"]);
  }
}
