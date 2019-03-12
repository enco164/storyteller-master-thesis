import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AnnotationSchemeListComponent} from './annotation-scheme-list.component';
import {Store, StoreModule} from '@ngrx/store';

describe('AnnotationSchemeListComponent', () => {
  let component: AnnotationSchemeListComponent;
  let fixture: ComponentFixture<AnnotationSchemeListComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [AnnotationSchemeListComponent]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationSchemeListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
