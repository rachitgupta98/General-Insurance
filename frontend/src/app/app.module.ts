import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MaterialModule } from './_modules/material/material.module';
//import { MaterialUIModule } from './material-ui/material-ui.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
//import { LoginComponent } from './_components/login/login.component';
import { SampleComponent } from './_components/sample/sample.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { FaqsComponent } from './_components/faqs/faqs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_modules/material/material.module';
import { LoginComponent } from './_components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './_components/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    SampleComponent,
    HeaderComponent,
    FooterComponent,
    FaqsComponent,
    //SampleComponent,
    LoginComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
