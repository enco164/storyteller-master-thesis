import * as fromKids from './reducers/kids-reducer';
import * as fromRoot from '../../reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface KidsState {
  kids: fromKids.State;
}

export interface State extends fromRoot.State {
  kids: KidsState;
}

export const reducers = {
  kids: fromKids.reducer
};

export const getKidsRootState = createFeatureSelector<KidsState>('kids');


export const getKidsState = createSelector(
  getKidsRootState,
  state => state.kids
);

export const getSelectedKidId = createSelector(
  getKidsState,
  fromKids.getCurrentKidId
);

export const {
  selectAll: getAllKids,
  selectEntities: getKidsEntities,
} = fromKids.kidsAdapter.getSelectors(getKidsState);

export const getCurrentKid = createSelector(
  getKidsEntities,
  getSelectedKidId,
  (entities, id) => id && entities[id]
);

export const getKidsLoading = createSelector(
  getKidsState,
  fromKids.getLoading
);

