import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {TranscriptActions, TranscriptActionTypes} from '../actions/transcript.actions';

@Injectable()
export class TranscriptEffects {

  @Effect()
  effect$ = this.actions$.ofType(TranscriptActionTypes.LoadTranscripts);

  constructor(private actions$: Actions) {
  }
}
