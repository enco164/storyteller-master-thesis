import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from './custom-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CoreModule} from "../core/core.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    CustomMaterialModule,
    FlexLayoutModule,
  ]
})
export class SharedModule {
}
