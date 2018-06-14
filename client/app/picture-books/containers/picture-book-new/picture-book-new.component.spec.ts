import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PictureBookNewComponent} from './picture-book-new.component';

describe('PictureBookNewComponent', () => {
  let component: PictureBookNewComponent;
  let fixture: ComponentFixture<PictureBookNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureBookNewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureBookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
