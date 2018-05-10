import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KidsRoutingModule} from './kids-routing.module';
import {KidsComponent} from './containers/kids-table-page/kids.component';
import {MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {KidEditComponent} from './containers/kid-edit-page/kid-edit.component';
import {FormsModule} from '@angular/forms';
import {KidFormComponent} from './components/kid-form/kid-form.component';
import {KidNewComponent} from './containers/kid-new-page/kid-new.component';
import {KidExistsGuard} from './guards/kid-exists.guard';
import {KidsResource} from './services/kids.resource';

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
  declarations: [KidsComponent, KidEditComponent, KidFormComponent, KidNewComponent],
  providers: [KidsResource, KidExistsGuard]
})
export class KidsModule { }
