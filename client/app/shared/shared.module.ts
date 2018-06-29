import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from './custom-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    CustomMaterialModule,
    FlexLayoutModule,
  ]
})
export class SharedModule {
}
