import { PaymentComponent } from "./_components/payment/payment.component";
import { PolicyDisplayComponent } from "./_components/policy-display/policy-display.component";
import { PolicyFormComponent } from "./_components/policy-form/policy-form.component";
import { VehicleDetailsComponent } from "./_components/vehicle-details/vehicle-details.component";
import { LoginComponent } from "./_components/login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UserRegistrationComponent } from "./_components/user-registration/user-registration.component";
import { HomeComponent } from "./_components/home/home.component";
import { VehicleHomeComponent } from "./_components/vehicle-home/vehicle-home.component";
import { ClaimsComponent } from "./_components/claims/claims.component";
import { ProfileComponent } from "./_components/profile/profile.component";
import { UserPolicesComponent } from "./_components/user-polices/user-polices.component";
import { ClaimPolicyComponent } from "./_components/claim-policy/claim-policy.component";
import { DocUploadComponent } from "./_components/doc-upload/doc-upload.component";
import { RenewComponent } from "./_components/renew/renew.component";
import { AdminDashboardComponent } from "./_components/admin-dashboard/admin-dashboard.component";
import { ForgotpasswordComponent} from "./_components/forgotpassword/forgotpassword.component";
import { ResetpasswordComponent} from "./_components/resetpassword/resetpassword.component";
import { PremiumcalculatorComponent } from "./_components/premiumcalculator/premiumcalculator.component";


const routes: Routes = [
  { path: "resetpassword", component: ResetpasswordComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  { path: "user_registration", component: UserRegistrationComponent },
  { path: "updateprofile", component: UserRegistrationComponent },
  { path: "home", component: HomeComponent },
  { path: "user_login", component: LoginComponent },
  { path: "admin_login", component: LoginComponent },
  { path: "vehicleRegistration", component: VehicleDetailsComponent },
  { path: "claim", component: ClaimsComponent },
  { path: "policyForm", component: PolicyFormComponent },
  { path: "policies", component: UserPolicesComponent },
  { path: "profile", component: ProfileComponent },
  { path: "policyDisplay", component: PolicyDisplayComponent },
  //{path:"docUpload",component:DocUploadComponent},
  { path: "renewPolicy", component: RenewComponent },
  // { path: "claimPolicy",component:ClaimPolicyComponent},
  { path: "dashboard", component: AdminDashboardComponent },
  { path: "docUpload", component: DocUploadComponent },
  { path: "claimPolicy", component: ClaimPolicyComponent },
 { path: "premiumCalulator",component:PremiumcalculatorComponent },
  { path: "paymentgateway", component: PaymentComponent },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
