import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailRowDirective} from "./detail-row/detail-row.directive";
import {NotFoundComponent} from "./not-found/not-found.component";

const COMPONENTS = [
  DetailRowDirective,
  NotFoundComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
