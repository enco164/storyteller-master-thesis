import {Action} from '@ngrx/store';
import {TranscriptActions, TranscriptActionTypes} from '../actions/transcript.actions';

export interface State {

}

export const initialState: State = {};

export function reducer(state = initialState, action: TranscriptActions): State {
  switch (action.type) {

    case TranscriptActionTypes.LoadTranscripts:
      return state;


    default:
      return state;
  }
}
