import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PictureBooksListComponent} from './picture-books-list.component';

describe('PictureBooksListComponent', () => {
  let component: PictureBooksListComponent;
  let fixture: ComponentFixture<PictureBooksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureBooksListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
