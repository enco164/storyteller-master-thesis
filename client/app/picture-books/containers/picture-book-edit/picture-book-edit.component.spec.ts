import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PictureBookEditComponent} from './picture-book-edit.component';

describe('PictureBookEditComponent', () => {
  let component: PictureBookEditComponent;
  let fixture: ComponentFixture<PictureBookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureBookEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureBookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
