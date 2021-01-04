import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleDetailsService {

  constructor() { }
  getVehicleDetailsTitle(){
    return [
      "Registration No",
      "Owner Name",
      "Manufacturer",
      "Model & Variant",
      "Registration Year",
      "Chesis Number",
      "Engine Number"
    ]
  }
}
