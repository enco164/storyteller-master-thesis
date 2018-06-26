import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  CreateSession,
  CreateSessionFail,
  CreateSessionSuccess, DeleteSession, DeleteSessionFail, DeleteSessionSuccess,
  LoadSession,
  LoadSessionFail,
  LoadSessionsFail,
  LoadSessionsSuccess,
  LoadSessionSuccess,
  SessionActionTypes, UpdateSession, UpdateSessionFail, UpdateSessionSuccess
} from '../actions/session.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {SessionsResource} from '../../services/sessions.resource';
import {of} from 'rxjs';
import {Session} from '../session.model';

@Injectable()
export class SessionEffects {

  @Effect()
  loadAll$ = this.actions$.pipe(
    ofType(SessionActionTypes.LoadSessions),
    switchMap(() => this.resource.getSessions().pipe(
      map((sessions: Session[]) => new LoadSessionsSuccess(sessions)),
      catchError((err) => of(new LoadSessionsFail(err)))
    ))
  );

  @Effect()
  create$ = this.actions$.pipe(
    ofType(SessionActionTypes.CreateSession),
    map((action: CreateSession) => action.payload),
    switchMap(sessionToCreate => this.resource.createSession(sessionToCreate).pipe(
      map(createdSession => new CreateSessionSuccess(createdSession)),
      catchError(err => of(new CreateSessionFail(err)))
    ))
  );

  @Effect()
  load$ = this.actions$.pipe(
    ofType(SessionActionTypes.LoadSession),
    map((action: LoadSession) => action.payload),
    switchMap(id => this.resource.getSessionById(id).pipe(
      map(session => new LoadSessionSuccess(session)),
      catchError(err => of(new LoadSessionFail(err)))
    ))
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType(SessionActionTypes.UpdateSession),
    map((action: UpdateSession) => action.payload),
    switchMap(sessionToUpdate => this.resource.updateSession(sessionToUpdate).pipe(
      map(updatedSession => new UpdateSessionSuccess({
        id: updatedSession.id,
        changes: updatedSession
      })),
      catchError(err => of(new UpdateSessionFail(err)))
    ))
  );

  @Effect()
  delete$ = this.actions$.pipe(
    ofType(SessionActionTypes.DeleteSession),
    map((action: DeleteSession) => action.payload),
    switchMap(sessionToDelete => this.resource.deleteSession(sessionToDelete).pipe(
      map(() => new DeleteSessionSuccess(sessionToDelete.id)),
      catchError(err => of(new DeleteSessionFail(err)))
    ))
  );

  constructor(private actions$: Actions, private resource: SessionsResource) {
  }
}
