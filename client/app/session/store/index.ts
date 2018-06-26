import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromSession from './reducers/session.reducer';
import {adapter} from './reducers/session.reducer';

export interface SessionState {
  sessions: fromSession.State;
}

export interface State extends fromRoot.State {
  sessions: SessionState;
}

export const getSessionRootState = createFeatureSelector<SessionState>('session');


export const getSessionState = createSelector(
  getSessionRootState,
  state => state.sessions
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(getSessionState);

export const getSessionsLoading = createSelector(
  getSessionState,
  state => state.loading
);

export const getSelectedSessionId = createSelector(
  getSessionState,
  state => state.currentSessionId
);

export const getCurrentSession = createSelector(
  selectEntities,
  getSelectedSessionId,
  (entities, id) => id && entities[id]
);
export const reducers = {
  sessions: fromSession.reducer
};
