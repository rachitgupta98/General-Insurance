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
  MatToolbarModule
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
  MatToolbarModule


];
@NgModule({
  declarations: [],
  imports: [materialUi],
  exports: [materialUi]
})
export class MaterialModule { }




