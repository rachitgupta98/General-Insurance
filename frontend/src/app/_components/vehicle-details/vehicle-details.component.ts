import { Component, OnInit } from '@angular/core';
import { VehicleDetailsService } from 'src/app/_services/vehicle-details/vehicle-details.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  vehicleDetailsTitle=[];
  constructor(private vehicleService:VehicleDetailsService) {
    this.vehicleDetailsTitle = this.vehicleService.getVehicleDetailsTitle();
   }

  ngOnInit() {
  }

}
