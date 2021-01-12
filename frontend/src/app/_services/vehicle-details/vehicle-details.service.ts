import VehicleInfoModel from "src/app/_models/vehicleInfoModel";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class VehicleDetailsService {
  constructor(private http: HttpClient) {}

  saveVehicleInfo(vehicle: VehicleInfoModel): Observable<VehicleInfoModel> {
    return this.http.post<VehicleInfoModel>(
      `http://localhost:8080/insurance/addOrUpdateVehicle`,
      vehicle
    );
  }
}
