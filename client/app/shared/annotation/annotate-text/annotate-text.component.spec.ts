import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnnotateTextComponent} from './annotate-text.component';

describe('AnnotateTextComponent', () => {
  let component: AnnotateTextComponent;
  let fixture: ComponentFixture<AnnotateTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnnotateTextComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotateTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
