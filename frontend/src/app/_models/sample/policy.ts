import { VehicleDetailsComponent } from "src/app/_components/vehicle-details/vehicle-details.component";
import User from "./user";
import { Vehicle } from "./vehicle";

export class Policy{
    policyId:number;
    policyNumber:number;
    planType:string;
    purchaseDate:Date;
    policyStartDate:Date;
    policyEndDate:Date;
    premiumAmount:number;
    isExpired:boolean;
    insuranceAmount:number;
    user:User;
    vehicle:Vehicle;
}