import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {CdkTableModule} from '@angular/cdk/table';
import {MatSelectModule} from '@angular/material/select';

const COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMomentDateModule,
  MatDialogModule,

  CdkTableModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatButtonModule,
  MatSelectModule,

  MatDatepickerModule,
];

@NgModule({
  exports: COMPONENTS,
})
export class CustomMaterialModule {
}
