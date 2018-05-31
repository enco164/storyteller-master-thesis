import {
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

const COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMomentDateModule,
];

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS,
})
export class CustomMaterialModule { }
