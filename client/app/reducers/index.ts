import {ActionReducerMap} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {RouterStateUrl} from '../shared/custom-router-state-serializer';


export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};
