import {MatToolbarModule} from '@angular/material';
import {NgModule} from '@angular/core';

const COMPONENTS = [
  MatToolbarModule
];

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS,
})
export class CustomMaterialModule { }
