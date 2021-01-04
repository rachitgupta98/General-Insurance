import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule,MatInputModule,MatFormFieldModule, MatGridListModule} from "@angular/material";

const MaterialComponents=[
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatGridListModule
]
@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
