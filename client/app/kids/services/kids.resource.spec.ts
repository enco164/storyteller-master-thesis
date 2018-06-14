import {inject, TestBed} from '@angular/core/testing';

import {KidsResource} from './kids.resource';

describe('KidsResource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KidsResource]
    });
  });

  it('should be created', inject([KidsResource], (service: KidsResource) => {
    expect(service).toBeTruthy();
  }));
});
