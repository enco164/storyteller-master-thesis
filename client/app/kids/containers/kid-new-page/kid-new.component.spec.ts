import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KidNewComponent} from './kid-new.component';

describe('KidNewComponent', () => {
  let component: KidNewComponent;
  let fixture: ComponentFixture<KidNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KidNewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
