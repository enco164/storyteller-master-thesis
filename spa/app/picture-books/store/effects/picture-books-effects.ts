import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  Create, CreateFail,
  CreateSuccess, Delete, DeleteFail, DeleteSuccess, Load,
  LoadAllFail,
  LoadAllSuccess, LoadFail, LoadSuccess, Patch, PatchFail, PatchSuccess,
  PictureBooksActionTypes
} from '../actions/picture-books-actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {PictureBook} from '../../models/picture-book.model';
import {PictureBooksResource} from '../../services/picture-books.resource';

@Injectable()
export class PictureBooksEffects {
  constructor(private actions$: Actions, private resource: PictureBooksResource) {
  }

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType(PictureBooksActionTypes.LOAD_ALL),
    switchMap(() => this.resource.getPictureBooks()),
    map((pictureBooks: PictureBook[]) => new LoadAllSuccess(pictureBooks)),
    catchError((err => of(new LoadAllFail(err))))
  );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
    ofType(PictureBooksActionTypes.CREATE),
    map((action: Create) => action.payload),
    switchMap((pictureBook: PictureBook) => this.resource.createPictureBook(pictureBook)),
    map((pictureBook: PictureBook) => new CreateSuccess(pictureBook)),
    catchError((err) => of(new CreateFail(err)))
  );

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(PictureBooksActionTypes.LOAD),
    map((action: Load) => action.payload),
    switchMap((id) => this.resource.loadPictureBookById(id)),
    map(pictureBook => new LoadSuccess(pictureBook)),
    catchError(err => of(new LoadFail(err)))
  );

  @Effect()
  patch$: Observable<Action> = (this.actions$).pipe(
    ofType(PictureBooksActionTypes.PATCH),
    map((action: Patch) => action.payload),
    switchMap((pictureBook: PictureBook) => this.resource.patchPictureBook(pictureBook)),
    map((pictureBook: PictureBook) => new PatchSuccess({
      id: pictureBook.id,
      changes: pictureBook
    })),
    catchError((err) => of(new PatchFail(err)))
  );

  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(PictureBooksActionTypes.DELETE),
    map((action: Delete) => action.payload),
    switchMap(pictureBook => this.resource.deletePictureBook(pictureBook).pipe(
      map(() => new DeleteSuccess(pictureBook.id)),
      catchError((err) => of(new DeleteFail(err)))
    ))
  );
}
