import {AnnotationSchemeActions, AnnotationSchemeActionTypes} from '../actions/annotation-scheme.actions';
import {AnnotationScheme} from '../annotation-scheme.model';

export interface State {
  schemes: AnnotationScheme[];
}

export const initialState: State = {
  schemes: []
};

export function reducer(state = initialState, action: AnnotationSchemeActions): State {
  switch (action.type) {

    case AnnotationSchemeActionTypes.LoadAnnotationSchemesSuccess:
      return {...state, schemes: action.payload};


    default:
      return state;
  }
}
