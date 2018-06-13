import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureBookFormComponent } from './picture-book-form.component';

describe('PictureBookFormComponent', () => {
  let component: PictureBookFormComponent;
  let fixture: ComponentFixture<PictureBookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureBookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
