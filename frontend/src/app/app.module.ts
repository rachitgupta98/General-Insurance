import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SampleComponent } from "./_components/sample/sample.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./_modules/material/material.module";
import { VehicleHomeComponent } from "./_components/vehicle-home/vehicle-home.component";
import { VehicleDetailsComponent } from "./_components/vehicle-details/vehicle-details.component";
import { InputFieldComponent } from "./_components/input-field/input-field.component";
import { VehicleDetailsService } from "./_services/vehicle-details/vehicle-details.service";
import { LoginComponent } from "./_components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AboutUsComponent } from "./_components/about-us/about-us.component";

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    VehicleHomeComponent,
    VehicleDetailsComponent,
    InputFieldComponent,
    LoginComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [VehicleDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
