import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';
import { KidsComponent } from './kids/kids.component';
import {MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { KidComponent } from './kid/kid.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,

    FormsModule,

    KidsRoutingModule,
  ],
  declarations: [KidsComponent, KidComponent]
})
export class KidsModule { }
