import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { SampleComponent } from './_components/sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
