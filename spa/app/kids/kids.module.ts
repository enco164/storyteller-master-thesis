import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KidsRoutingModule} from './kids-routing.module';
import {KidsComponent} from './kids/kids.component';
import {MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {KidEditComponent} from './kid-edit/kid-edit.component';
import {FormsModule} from '@angular/forms';
import {KidFormComponent} from './kid-form/kid-form.component';
import {KidNewComponent} from './kid-new/kid-new.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,

    HttpClientModule,

    CdkTableModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,

    FormsModule,

    KidsRoutingModule,
  ],
  declarations: [KidsComponent, KidEditComponent, KidFormComponent, KidNewComponent]
})
export class KidsModule { }
