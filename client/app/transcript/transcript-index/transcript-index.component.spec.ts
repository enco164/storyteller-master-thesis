import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TranscriptIndexComponent} from './transcript-index.component';

describe('TranscriptIndexComponent', () => {
  let component: TranscriptIndexComponent;
  let fixture: ComponentFixture<TranscriptIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TranscriptIndexComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscriptIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
