import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatFormFieldModule,
  MatStepperModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatTooltipModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule
} from '@angular/material'


const materialUi = [
  MatCardModule,
  MatFormFieldModule,
  MatStepperModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatTooltipModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule

];
@NgModule({
  declarations: [],
  imports: [materialUi],
  exports: [materialUi]
})
export class MaterialModule { }




