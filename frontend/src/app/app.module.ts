import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { LoginComponent } from './_components/login/login.component';
import { SampleComponent } from './_components/sample/sample.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { FaqsComponent } from './_components/faqs/faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    SampleComponent,
    HeaderComponent,
    FooterComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
