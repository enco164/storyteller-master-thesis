import * as fromAnnotationScheme from './annotation-scheme.reducer';
import * as fromRoot from '../../reducers/index';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface AnnotationSchemeState {
  annotationSchemes: fromAnnotationScheme.State;
}

export interface State extends fromRoot.State {
  annotationSchemes: AnnotationSchemeState;
}

export const reducers: ActionReducerMap<AnnotationSchemeState> = {
  annotationSchemes: fromAnnotationScheme.reducer
};

export const selectAnnotationSchemeRootState = createFeatureSelector<AnnotationSchemeState>('annotationSchemes');

export const selectAnnotationSchemes = createSelector(selectAnnotationSchemeRootState, (state) => state.annotationSchemes);

export const selectSchemes = createSelector(selectAnnotationSchemes, (state) => state.schemes);
