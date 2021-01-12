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

const routes: Routes = [
  { path: "user_registration", component: UserRegistrationComponent },
  { path: "home", component: HomeComponent },
  { path: "user_login", component: LoginComponent },
  { path: "admin_login", component: LoginComponent },
  { path: "vehicleRegistration", component: VehicleDetailsComponent },
  {path:"claim",component:ClaimsComponent},
  { path: "policyForm", component: PolicyFormComponent },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
