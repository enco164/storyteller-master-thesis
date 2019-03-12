import {Action} from '@ngrx/store';

export enum TranscriptActionTypes {
  LoadTranscripts = '[Transcript] Load Transcripts'
}

export class LoadTranscripts implements Action {
  readonly type = TranscriptActionTypes.LoadTranscripts;
}

export type TranscriptActions = LoadTranscripts;
