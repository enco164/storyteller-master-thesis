import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {RouterStateSerializer} from '@ngrx/router-store';
import {SharedModule} from './shared/shared.module';
import {CustomRouterStateSerializer} from './shared/custom-router-state-serializer';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({maxAge: 50}),

    AppRoutingModule
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
