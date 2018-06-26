import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SessionRoutingModule} from './session-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromSession from './store';
import {EffectsModule} from '@ngrx/effects';
import {SessionEffects} from './store/effects/session.effects';
import {SessionsIndexComponent} from './containers/sessions-index/sessions-index.component';
import {SessionsResource} from './services/sessions.resource';
import { SessionNewComponent } from './containers/session-new/session-new.component';
import { SessionEditComponent } from './containers/session-edit/session-edit.component';


@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule,
    StoreModule.forFeature('session', fromSession.reducers),
    EffectsModule.forFeature([SessionEffects])
  ],
  providers: [SessionsResource],
  declarations: [SessionsIndexComponent, SessionNewComponent, SessionEditComponent]
})
export class SessionModule {
}
