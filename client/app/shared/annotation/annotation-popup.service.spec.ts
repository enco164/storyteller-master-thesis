import {TestBed, inject} from '@angular/core/testing';

import {AnnotationPopupService} from './annotation-popup.service';

describe('AnnotationPopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnotationPopupService]
    });
  });

  it('should be created', inject([AnnotationPopupService], (service: AnnotationPopupService) => {
    expect(service).toBeTruthy();
  }));
});
