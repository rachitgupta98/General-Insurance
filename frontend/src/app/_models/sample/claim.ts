//import { logging } from "protractor";
import { Policy } from "./policy";
import User from "./user";

export class Claim{
    claimId:number;
    claimReason:String;
    claimStatus:String;
    claimAmount:number;
    cliamForPolicyNumber:number;
    documentFile:String;
    user:User;
    policy:Policy;
}