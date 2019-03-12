import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from './custom-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AnnotationModule} from './annotation/annotation.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    AnnotationModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    CustomMaterialModule,
    FlexLayoutModule,
    AnnotationModule,
  ]
})
export class SharedModule {
}
