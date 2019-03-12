import {TestBed, inject} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {TranscriptEffects} from './transcript.effects';

describe('TranscriptService', () => {
  let actions$: Observable<any>;
  let effects: TranscriptEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TranscriptEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TranscriptEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
