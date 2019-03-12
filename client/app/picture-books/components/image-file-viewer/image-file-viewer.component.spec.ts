import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageFileViewerComponent} from './image-file-viewer.component';

describe('ImageFileViewerComponent', () => {
  let component: ImageFileViewerComponent;
  let fixture: ComponentFixture<ImageFileViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageFileViewerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFileViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
