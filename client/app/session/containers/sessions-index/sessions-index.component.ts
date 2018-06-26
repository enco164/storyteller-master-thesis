import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable} from 'rxjs';
import {Session} from '../../store/session.model';
import {DeleteSession, LoadSessions, SetCurrentSessionId} from '../../store/actions/session.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'st-sessions-index',
  templateUrl: './sessions-index.component.html',
  styleUrls: ['./sessions-index.component.css']
})
export class SessionsIndexComponent implements OnInit {

  sessions$: Observable<Session[]>;
  isLoadingResults$: Observable<boolean>;

  constructor(private store: Store<fromStore.State>,
              private router: Router) {
  }

  ngOnInit() {
    this.sessions$ = this.store.select(fromStore.selectAll);
    this.store.dispatch(new LoadSessions());
    this.isLoadingResults$ = this.store.select(fromStore.getSessionsLoading);
  }

  editSession(session: Session) {
    this.store.dispatch(new SetCurrentSessionId(session.id));
    this.router.navigate(['/sessions', session.id, 'edit']);
  }

  deleteSession(session: Session) {
    this.store.dispatch(new DeleteSession(session));
  }
}
