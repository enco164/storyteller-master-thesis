import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsIndexComponent } from './sessions-index.component';
import { Store, StoreModule } from '@ngrx/store';

describe('SessionsIndexComponent', () => {
  let component: SessionsIndexComponent;
  let fixture: ComponentFixture<SessionsIndexComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ SessionsIndexComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsIndexComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
