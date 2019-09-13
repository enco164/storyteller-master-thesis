import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationSchemesShellComponent } from './annotation-schemes-shell.component';

describe('AnnotationSchemesShellComponent', () => {
  let component: AnnotationSchemesShellComponent;
  let fixture: ComponentFixture<AnnotationSchemesShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotationSchemesShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationSchemesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
