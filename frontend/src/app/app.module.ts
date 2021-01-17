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
import { ChartModule } from 'angular-highcharts'



import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from "./_components/footer/footer.component";
import { HomeComponent } from "./_components/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NavigationComponent } from "./_components/navigation/navigation.component";
import { from } from "rxjs";

import { RenewComponent } from './_components/renew/renew.component';
//import { RenewComponent } from './_components/renew/renew.component';
//import { ForgotpasswordComponent } from "./_components/forgotpassword/forgotpassword.component";
import { ProfileComponent } from "./_components/profile/profile.component";
import { ClaimsComponent } from "./_components/claims/claims.component";
import { PolicyFormComponent } from "./_components/policy-form/policy-form.component";
import { UserPolicesComponent } from "./_components/user-polices/user-polices.component";
import { PolicyDisplayComponent } from "./_components/policy-display/policy-display.component";
import { ClaimPolicyComponent } from "./_components/claim-policy/claim-policy.component";
import { DocUploadComponent } from "./_components/doc-upload/doc-upload.component";
import { PaymentComponent } from './_components/payment/payment.component';

import { DashCardComponent } from './_components/dash-card/dash-card.component';
import { AdmindashboardComponent } from './_components/admindashboard/admindashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ChartComponent } from './_components/chart/chart.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ClaimTableComponent } from './_components/claim-table/claim-table.component';
import { LineChartComponent } from './_components/line-chart/line-chart.component';
import { MiniCardComponent } from './_components/mini-card/mini-card.component';
import { ForgotpasswordComponent } from './_components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './_components/resetpassword/resetpassword.component';
import { ClaimPolicyService } from "./_services/claim-policy/claim-policy.service";
import { PremiumcalculatorComponent } from './_components/premiumcalculator/premiumcalculator.component';
import { ChatBotComponent } from './_components/chat-bot/chat-bot.component';

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
   // PremiumCalculatorComponent,
    ForgotpasswordComponent,
    ProfileComponent,
    ClaimsComponent,
    PolicyFormComponent,
    UserPolicesComponent,
    PolicyDisplayComponent,
    ClaimPolicyComponent,
    DocUploadComponent,
    
    PaymentComponent,
    DashCardComponent,
    AdmindashboardComponent,
    ChartComponent,
    ClaimTableComponent,
    LineChartComponent,
    MiniCardComponent,
    RenewComponent,
    PaymentComponent,
    ResetpasswordComponent,
    PremiumcalculatorComponent,   
    ChatBotComponent,
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
    ChartModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
    
  ],
  providers: [VehicleDetailsService,ClaimPolicyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
