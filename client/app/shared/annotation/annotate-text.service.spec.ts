import {TestBed, inject} from '@angular/core/testing';

import {AnnotateTextService} from './annotate-text.service';

describe('AnnotateTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnotateTextService]
    });
  });

  it('should be created', inject([AnnotateTextService], (service: AnnotateTextService) => {
    expect(service).toBeTruthy();
  }));
});
