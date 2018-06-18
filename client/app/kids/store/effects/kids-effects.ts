import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {KidsResource} from '../../services/kids.resource';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  Create,
  CreateFail,
  CreateSuccess,
  Delete,
  DeleteFail,
  DeleteSuccess,
  KidsActionTypes,
  Load,
  LoadAllFail,
  LoadAllSuccess,
  LoadFail,
  LoadSuccess,
  Patch,
  PatchFail,
  PatchSuccess
} from '../actions/kids-actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {KidModel} from '../../models/kid';

@Injectable()
export class KidsEffects {

  constructor(private actions$: Actions,
              private kidResource: KidsResource) {
  }

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType(KidsActionTypes.LOAD_ALL),
    switchMap(() =>
      this.kidResource
        .getKids().pipe(
        map((kids: KidModel[]) => new LoadAllSuccess(kids)),
        catchError((error) => of(new LoadAllFail(error)))
      )
    )
  );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(KidsActionTypes.LOAD),
    map((action: Load) => action.payload),
    switchMap((id) => this.kidResource
      .getKidById(id).pipe(
        map((kid: KidModel) => new LoadSuccess(kid)),
        catchError((error) => of(new LoadFail(error)))
      ))
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(KidsActionTypes.CREATE),
    map((action: Create) => action.payload),
    switchMap((kid) =>
      this.kidResource
        .createKid(kid).pipe(
        map((createdContact: KidModel) => new CreateSuccess(createdContact)),
        catchError(err => of(new CreateFail(err)))
      )
    )
  );

  @Effect()
  patch$: Observable<Action> = this.actions$.pipe(
    ofType(KidsActionTypes.PATCH),
    map((action: Patch) => action.payload),
    switchMap((kid: KidModel) =>
      this.kidResource
        .updateKid(kid).pipe(
        map((updatedKid: KidModel) => new PatchSuccess({
          id: updatedKid.id,
          changes: updatedKid
        })),
        catchError((error => of(new PatchFail(error))))
      )
    )
  );

  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(KidsActionTypes.DELETE),
    map((action: Delete) => action.payload),
    switchMap(kid =>
      this.kidResource
        .deleteKid(kid).pipe(
        map(() => new DeleteSuccess(kid.id)),
        catchError((err) => of(new DeleteFail(err)))
      )
    )
  );

  @Effect()
  handleErrors$ = this.actions$.pipe(
    ofType(
      KidsActionTypes.LOAD_ALL_FAIL,
      KidsActionTypes.LOAD_FAIL,
      KidsActionTypes.CREATE_FAIL,
      KidsActionTypes.PATCH_FAIL,
      KidsActionTypes.DELETE_FAIL
    ),

  );
}
