import * as fromPictureBooks from './reducers/picture-books-reducer';
import * as fromRoot from '../../reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface PictureBooksState {
  pictureBooks: fromPictureBooks.State;
}

export interface State extends fromRoot.State {
  pictureBooks: PictureBooksState;
}

export const getPictureBooksRootState = createFeatureSelector<PictureBooksState>('pictureBooks');

export const getPictureBooksState = createSelector(
  getPictureBooksRootState,
  (state) => state.pictureBooks
);

export const {
  selectAll: getAllPictureBooks,
  selectEntities: getPictureBooksEntities
} = fromPictureBooks.pictureBooksAdapter.getSelectors(getPictureBooksState);

export const getPictureBooksLoading = createSelector(
  getPictureBooksState,
  fromPictureBooks.getLoading
);

export const getSelectedPictureBookId = createSelector(
  getPictureBooksState,
  fromPictureBooks.getCurrentPictureBookId
);

export const getCurrentPictureBook = createSelector(
  getPictureBooksEntities,
  getSelectedPictureBookId,
  (entities, id) => id && entities[id]
);

export const reducers = {
  pictureBooks: fromPictureBooks.reducer
};

