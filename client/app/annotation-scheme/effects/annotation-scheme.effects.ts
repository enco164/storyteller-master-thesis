import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as fromActions from '../actions/annotation-scheme.actions';
import {AnnotationSchemeActionTypes} from '../actions/annotation-scheme.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AnnotationSchemeResource} from '../services/annotation-scheme.resource';
import {of} from 'rxjs';


@Injectable()
export class AnnotationSchemeEffects {

  @Effect()
  effect$ = this.actions$.ofType(AnnotationSchemeActionTypes.LoadAnnotationSchemes)
    .pipe(
      switchMap(() => this.annotationSchemeResource.loadAll()
        .pipe(
          map(schemes => new fromActions.LoadAnnotationSchemesSuccess(schemes)),
          catchError(err => of(new fromActions.LoadAnnotationSchemesError(err)))
        ))
    );

  constructor(private actions$: Actions,
              private annotationSchemeResource: AnnotationSchemeResource) {
  }
}
