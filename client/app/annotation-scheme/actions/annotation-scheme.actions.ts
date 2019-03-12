import {Action} from '@ngrx/store';
import {AnnotationScheme} from '../annotation-scheme.model';


export enum AnnotationSchemeActionTypes {
  LoadAnnotationSchemes = '[AnnotationScheme] Load AnnotationSchemes',
  LoadAnnotationSchemesSuccess = '[AnnotationScheme] Load AnnotationSchemes Success',
  LoadAnnotationSchemesError = '[AnnotationScheme] Load AnnotationSchemes Error',
}

export class LoadAnnotationSchemes implements Action {
  readonly type = AnnotationSchemeActionTypes.LoadAnnotationSchemes;
}

export class LoadAnnotationSchemesSuccess implements Action {
  readonly type = AnnotationSchemeActionTypes.LoadAnnotationSchemesSuccess;

  constructor(public payload: AnnotationScheme[]) {
  }
}

export class LoadAnnotationSchemesError implements Action {
  readonly type = AnnotationSchemeActionTypes.LoadAnnotationSchemesError;

  constructor(public payload: any) {
  }
}

export type AnnotationSchemeActions
  = LoadAnnotationSchemes
  | LoadAnnotationSchemesSuccess
  | LoadAnnotationSchemesError;
