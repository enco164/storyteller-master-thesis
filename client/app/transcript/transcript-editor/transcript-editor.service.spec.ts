import {TestBed, inject} from '@angular/core/testing';

import {TranscriptEditorService} from './transcript-editor.service';

describe('TranscriptEditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranscriptEditorService]
    });
  });

  it('should be created', inject([TranscriptEditorService], (service: TranscriptEditorService) => {
    expect(service).toBeTruthy();
  }));
});
