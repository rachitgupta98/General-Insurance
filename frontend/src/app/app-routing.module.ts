import { VehicleDetailsComponent } from "./_components/vehicle-details/vehicle-details.component";
import { LoginComponent } from "./_components/login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UserRegistrationComponent } from "./_components/user-registration/user-registration.component";
import { HomeComponent } from "./_components/home/home.component";
import { VehicleHomeComponent } from "./_components/vehicle-home/vehicle-home.component";
import { ForgotpasswordComponent} from "./_components/forgotpassword/forgotpassword.component";
import { ResetpasswordComponent} from "./_components/resetpassword/resetpassword.component";
import { PremiumcalculatorComponent } from "./_components/premiumcalculator/premiumcalculator.component";

const routes: Routes = [
  { path: "resetpassword", component: ResetpasswordComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent  },
  { path: "premiumcalculator", component: PremiumcalculatorComponent  },
  { path: "user_registration", component: UserRegistrationComponent },
  { path: "home", component: HomeComponent },
  { path: "user_login", component: LoginComponent },
  { path: "admin_login", component: LoginComponent },
  { path: "vehicleRegistration", component: VehicleDetailsComponent },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
