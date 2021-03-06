import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {PictureBook} from '../../models/picture-book.model';
import {AllPictureBooksActions, PictureBooksActionTypes} from '../actions/picture-books-actions';

export interface State extends EntityState<PictureBook> {
  loading: boolean;
  currentPictureBookId?: any;
}

export const pictureBooksAdapter = createEntityAdapter<PictureBook>({
  selectId: (pictureBook: PictureBook) => pictureBook.id,
  sortComparer: false
});

export const INIT_STATE: State = pictureBooksAdapter.getInitialState({
  loading: false,
  currentPictureBookId: undefined
});

export function reducer(state: State = INIT_STATE,
                        {type, payload}: AllPictureBooksActions) {
  switch (type) {
    case PictureBooksActionTypes.LOAD_ALL_FAIL:
    case PictureBooksActionTypes.LOAD_FAIL:
    case PictureBooksActionTypes.CREATE_FAIL:
    case PictureBooksActionTypes.PATCH_FAIL:
    case PictureBooksActionTypes.DELETE_FAIL: {
      return {...state, loading: false};
    }

    case PictureBooksActionTypes.SET_CURRENT_PICTURE_BOOK_ID: {
      return {...state, currentPictureBookId: payload};
    }

    case PictureBooksActionTypes.LOAD_ALL:
    case PictureBooksActionTypes.LOAD:
    case PictureBooksActionTypes.PATCH:
    case PictureBooksActionTypes.CREATE:
    case PictureBooksActionTypes.DELETE: {
      return {...state, loading: true};
    }

    case PictureBooksActionTypes.LOAD_ALL_SUCCESS: {
      return pictureBooksAdapter.addAll(
        payload,
        {...state, loading: false}
      );
    }

    case PictureBooksActionTypes.LOAD_SUCCESS:
    case PictureBooksActionTypes.CREATE_SUCCESS: {
      return pictureBooksAdapter.addOne(
        payload,
        {...state, currentPictureBookId: payload.id, loading: false}
      );
    }

    case PictureBooksActionTypes.PATCH_SUCCESS: {
      return pictureBooksAdapter.updateOne(
        payload,
        {...state, loading: false}
      );
    }

    case PictureBooksActionTypes.DELETE_SUCCESS: {
      return pictureBooksAdapter.removeOne(payload, {...state, loading: false});
    }

    default: {
      return state;
    }
  }
}
