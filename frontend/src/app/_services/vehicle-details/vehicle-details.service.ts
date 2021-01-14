import VehicleInfoModel from "src/app/_models/vehicleInfoModel";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class VehicleDetailsService {
  constructor(private http: HttpClient) {}

  saveVehicleInfo(vehicle: VehicleInfoModel): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/insurance/addOrUpdateVehicle`,
      vehicle
    );
  }

  fetchExistedVehicleData(registrationNo): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/insurance/findVehicleByRegNo?regist=${registrationNo}`
    );
  }

  fetchPolicyByVehcileId(vehicleId): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/insurance/findPolicyByVehicleId?vehicleId=${vehicleId}`
    );
  }
}
