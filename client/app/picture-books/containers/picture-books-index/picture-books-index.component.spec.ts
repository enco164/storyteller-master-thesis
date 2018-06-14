import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PictureBooksIndexComponent} from './picture-books-index.component';

describe('PictureBooksIndexComponent', () => {
  let component: PictureBooksIndexComponent;
  let fixture: ComponentFixture<PictureBooksIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureBooksIndexComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureBooksIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
