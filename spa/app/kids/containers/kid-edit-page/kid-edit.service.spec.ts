import {inject, TestBed} from '@angular/core/testing';

import {KidEditService} from './kid-edit.service';

describe('KidEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KidEditService]
    });
  });

  it('should be created', inject([KidEditService], (service: KidEditService) => {
    expect(service).toBeTruthy();
  }));
});
