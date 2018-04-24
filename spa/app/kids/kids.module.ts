import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';
import { KidsComponent } from './kids/kids.component';
import {MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    KidsRoutingModule,
    CdkTableModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [KidsComponent]
})
export class KidsModule { }
