import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Session} from '../session.model';
import {SessionActions, SessionActionTypes} from '../actions/session.actions';

export interface State extends EntityState<Session> {
  loading: boolean;
  currentSessionId?: any;
}

export const adapter: EntityAdapter<Session> = createEntityAdapter<Session>({
  selectId: model => model.id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  loading: false,
  currentSessionId: undefined
});

export function reducer(
  state = initialState,
  {type, payload}: SessionActions
): State {
  switch (type) {

    case SessionActionTypes.LoadSessions:
    case SessionActionTypes.LoadSession:
    case SessionActionTypes.UpdateSession:
    case SessionActionTypes.DeleteSession:
    case SessionActionTypes.CreateSession: {
      return {...state, loading: true};
    }

    case SessionActionTypes.LoadSessionsSuccess: {
      return adapter.addAll(payload, {...state, loading: false});
    }

    // case SessionActionTypes.AddSession: {
    case SessionActionTypes.CreateSessionSuccess:
    case SessionActionTypes.LoadSessionSuccess: {
      return adapter.addOne(payload, {...state, loading: false, currentSessionId: payload.id});
    }

    case SessionActionTypes.UpdateSessionSuccess: {
      return adapter.updateOne(payload, {...state, loading: false});
    }

    case SessionActionTypes.SetCurrentSessionId: {
      return {...state, currentSessionId: payload};
    }

    case SessionActionTypes.DeleteSessionSuccess: {
      return adapter.removeOne(payload, {...state, loading: false});
    }


    // case SessionActionTypes.UpsertSession: {
    //   return adapter.upsertOne(payload, state);
    // }
    //
    // case SessionActionTypes.AddSessions: {
    //   return adapter.addMany(payload, state);
    // }
    //
    // case SessionActionTypes.UpsertSessions: {
    //   return adapter.upsertMany(payload, state);
    // }
    //
    // case SessionActionTypes.UpdateSessions: {
    //   return adapter.updateMany(payload, state);
    // }
    //
    // case SessionActionTypes.DeleteSessions: {
    //   return adapter.removeMany(payload.ids, state);
    // }
    //
    // case SessionActionTypes.ClearSessions: {
    //   return adapter.removeAll(state);
    // }

    default: {
      return state;
    }
  }
}
