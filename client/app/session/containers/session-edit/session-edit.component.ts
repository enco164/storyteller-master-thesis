import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Session} from '../../store/session.model';
import {ActionsSubject, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadSession, SessionActionTypes, UpdateSessionSuccess} from '../../store/actions/session.actions';
import {filter} from 'rxjs/operators';
import {ofType} from '@ngrx/effects';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'st-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.scss']
})
export class SessionEditComponent implements OnInit, OnDestroy {

  model$: Observable<Session>;
  redirectSub: Subscription;

  constructor(private store: Store<fromStore.State>,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private actionsSubject: ActionsSubject) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      this.store.dispatch(new LoadSession(params['id']));
    });

    this.model$ = this.store.select(fromStore.getCurrentSession);

    this.redirectSub = this.actionsSubject.pipe(
      ofType(SessionActionTypes.UpdateSessionSuccess),
      filter((action: UpdateSessionSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['id'])
    ).subscribe(
      () => this.router.navigate(['/sessions'])
    );
  }

  ngOnDestroy(): void {
    this.redirectSub.unsubscribe();
  }


}
