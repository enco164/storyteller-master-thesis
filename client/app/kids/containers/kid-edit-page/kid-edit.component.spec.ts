import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KidEditComponent} from './kid-edit.component';

describe('KidEditComponent', () => {
  let component: KidEditComponent;
  let fixture: ComponentFixture<KidEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KidEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
