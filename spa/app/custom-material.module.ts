import {
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';

const COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
];

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS,
})
export class CustomMaterialModule { }
