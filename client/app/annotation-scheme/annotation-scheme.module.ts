import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromAnnotationScheme from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {AnnotationSchemeEffects} from './effects/annotation-scheme.effects';
import {AnnotationSchemeListComponent} from './annotation-scheme-list/annotation-scheme-list.component';
import {AnnotationSchemeRoutingModule} from './annotation-scheme-routing.module';
import {AnnotationSchemeResource} from './services/annotation-scheme.resource';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forFeature('annotationSchemes', fromAnnotationScheme.reducers),
    EffectsModule.forFeature([AnnotationSchemeEffects]),

    AnnotationSchemeRoutingModule
  ],
  declarations: [AnnotationSchemeListComponent],
  providers: [AnnotationSchemeResource]
})
export class AnnotationSchemeModule {
}
