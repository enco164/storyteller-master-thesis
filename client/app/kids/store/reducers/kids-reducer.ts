import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Kid} from '../../models/kid.model';
import {AllKidsActions, KidsActionTypes} from '../actions/kids-actions';

export interface State extends EntityState<Kid> {
  loading: boolean;
  currentKidId?: any;
}

export const kidsAdapter = createEntityAdapter<Kid>({
  selectId: (kid: Kid) => kid.id,
  sortComparer: false
});

export const INIT_STATE: State = kidsAdapter.getInitialState({
  loading: false,
  currentKidId: undefined
});

export function reducer(state: State = INIT_STATE,
                        {type, payload}: AllKidsActions): State {
  switch (type) {

    case KidsActionTypes.LOAD:
    case KidsActionTypes.LOAD_ALL:
    case KidsActionTypes.CREATE:
    case KidsActionTypes.PATCH:
    case KidsActionTypes.DELETE: {
      return {...state, loading: true};
    }

    case KidsActionTypes.LOAD_ALL_FAIL:
    case KidsActionTypes.LOAD_FAIL:
    case KidsActionTypes.CREATE_FAIL:
    case KidsActionTypes.PATCH_FAIL:
    case KidsActionTypes.DELETE_FAIL: {
      return {...state, loading: false};
    }

    case KidsActionTypes.SET_CURRENT_KID_ID: {
      return {...state, currentKidId: payload};
    }

    case KidsActionTypes.LOAD_ALL_SUCCESS : {
      return kidsAdapter.addAll(payload, {...state, loading: false});
    }

    case KidsActionTypes.LOAD_SUCCESS :
    case KidsActionTypes.CREATE_SUCCESS: {
      return kidsAdapter.addOne(payload, {...state, currentKidId: payload.id, loading: false});
    }

    case KidsActionTypes.PATCH_SUCCESS: {
      return kidsAdapter.updateOne(payload, {...state, loading: false});
    }

    case KidsActionTypes.DELETE_SUCCESS: {
      return kidsAdapter.removeOne(payload, {...state, loading: false});
    }

    default: {
      return state;
    }
  }
}

export const getCurrentKidId = (state: State) => state.currentKidId;

export const getLoading = (state: State) => state.loading;
