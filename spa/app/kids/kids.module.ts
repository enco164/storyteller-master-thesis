import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';
import { KidsComponent } from './kids/kids.component';

@NgModule({
  imports: [
    CommonModule,
    KidsRoutingModule
  ],
  declarations: [KidsComponent]
})
export class KidsModule { }
