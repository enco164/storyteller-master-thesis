import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as fromTranscript from './reducers/transcript.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TranscriptEffects} from './effects/transcript.effects';
import {TranscriptRoutingModule} from './transcript-routing.module';
import {TranscriptIndexComponent} from './transcript-index/transcript-index.component';
import {TranscriptEditorComponent} from './transcript-editor/transcript-editor.component';
import {SharedModule} from '../shared/shared.module';
import {AnnotationPopupComponent} from './annotation-popup/annotation-popup.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    TranscriptRoutingModule,
    StoreModule.forFeature('transcript', fromTranscript.reducer),
    EffectsModule.forFeature([TranscriptEffects]),
  ],
  entryComponents: [AnnotationPopupComponent],
  declarations: [TranscriptIndexComponent, TranscriptEditorComponent, AnnotationPopupComponent]
})
export class TranscriptModule {
}
