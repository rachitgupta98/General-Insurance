import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UserRegistrationComponent } from "./_components/user-registration/user-registration.component";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./_modules/material/material.module";
import { VehicleHomeComponent } from "./_components/vehicle-home/vehicle-home.component";
import { VehicleDetailsComponent } from "./_components/vehicle-details/vehicle-details.component";
import { InputFieldComponent } from "./_components/input-field/input-field.component";
import { VehicleDetailsService } from "./_services/vehicle-details/vehicle-details.service";
import { LoginComponent } from "./_components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AboutUsComponent } from "./_components/about-us/about-us.component";

import { FlexLayoutModule} from "@angular/flex-layout";
import { FooterComponent } from "./_components/footer/footer.component";
import { HomeComponent } from "./_components/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NavigationComponent } from "./_components/navigation/navigation.component";
import { PremiumCalculatorComponent } from './_components/premium-calculator/premium-calculator.component';
import { from } from "rxjs";
import { ForgotpasswordComponent } from './_components/forgotpassword/forgotpassword.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { ClaimsComponent } from './_components/claims/claims.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent,
    VehicleHomeComponent,
    VehicleDetailsComponent,
    InputFieldComponent,
    LoginComponent,
    AboutUsComponent,
    PremiumCalculatorComponent,
    ForgotpasswordComponent,
    ProfileComponent,
    ClaimsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [VehicleDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
