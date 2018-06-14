import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {CdkTableModule} from '@angular/cdk/table';

const COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMomentDateModule,

  CdkTableModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatButtonModule,

  MatDatepickerModule,
];

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS,
})
export class CustomMaterialModule {
}
