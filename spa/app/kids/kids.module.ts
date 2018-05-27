import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KidsRoutingModule} from './kids-routing.module';
import {KidsIndexComponent} from './containers/kids-index/kids-index.component';
import {MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {KidEditComponent} from './containers/kid-edit-page/kid-edit.component';
import {FormsModule} from '@angular/forms';
import {KidFormComponent} from './components/kid-form/kid-form.component';
import {KidNewComponent} from './containers/kid-new-page/kid-new.component';
import {KidExistsGuard} from './guards/kid-exists.guard';
import {KidsResource} from './services/kids.resource';
import {StoreModule} from '@ngrx/store';
import * as fromKids from './store';
import {EffectsModule} from '@ngrx/effects';
import {KidsListComponent} from './components/kids-list/kids-list.component';
import {KidsEffects} from './store/effects/kids-effects';

@NgModule({
  imports: [
    CommonModule,

    CdkTableModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,

    FormsModule,

    StoreModule.forFeature('kids', fromKids.reducers),
    EffectsModule.forFeature([KidsEffects]),

    KidsRoutingModule,
  ],
  declarations: [KidsIndexComponent, KidEditComponent, KidFormComponent, KidNewComponent, KidsListComponent],
  providers: [KidsResource, KidExistsGuard]
})
export class KidsModule { }
