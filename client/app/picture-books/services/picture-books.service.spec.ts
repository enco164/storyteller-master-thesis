import {inject, TestBed} from '@angular/core/testing';

import {PictureBooksService} from './picture-books.resource';

describe('PictureBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PictureBooksService]
    });
  });

  it('should be created', inject([PictureBooksService], (service: PictureBooksService) => {
    expect(service).toBeTruthy();
  }));
});
