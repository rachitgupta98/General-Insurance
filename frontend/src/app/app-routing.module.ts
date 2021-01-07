import { LoginComponent } from "./_components/login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UserRegistrationComponent } from "./_components/user-registration/user-registration.component";
import { HomeComponent } from "./_components/home/home.component";
import { VehicleHomeComponent } from "./_components/vehicle-home/vehicle-home.component";

const routes: Routes = [
  { path: "userRegistration", component: UserRegistrationComponent },
  { path: "home", component: VehicleHomeComponent },
  { path: "login", component: LoginComponent },
  //{ path: "**", redirectTo: "home" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
