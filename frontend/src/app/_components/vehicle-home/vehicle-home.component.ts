import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-vehicle-home",
  templateUrl: "./vehicle-home.component.html",
  styleUrls: ["./vehicle-home.component.scss"],
})
export class VehicleHomeComponent implements OnInit {
  @Input()
  typeOfVehicle: string = "4 wheeler";

  activeBtn1: boolean = true;
  activeBtn2: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

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
  goForRegistration() {
    this.router.navigate(["/vehicleRegistration"]);
  }
}
