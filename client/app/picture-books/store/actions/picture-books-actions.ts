import {Action} from '@ngrx/store';
import {PictureBook} from '../../models/picture-book.model';
import {Update} from '@ngrx/entity';

export enum PictureBooksActionTypes {
  LOAD_ALL = '[PictureBooks] LoadAll',
  LOAD_ALL_SUCCESS = '[PictureBooks] LoadAll SUCCESS',
  LOAD_ALL_FAIL = '[PictureBooks] LoadAll FAIL',

  CREATE = '[PictureBooks] Create',
  CREATE_SUCCESS = '[PictureBooks] Create SUCCESS',
  CREATE_FAIL = '[PictureBooks] Create FAIL',

  LOAD = '[PictureBooks] Load',
  LOAD_SUCCESS = '[PictureBooks] Load SUCCESS',
  LOAD_FAIL = '[PictureBooks] Load FAIL',

  PATCH = '[PictureBooks] Patch',
  PATCH_SUCCESS = '[PictureBooks] Patch SUCCESS',
  PATCH_FAIL = '[PictureBooks] Patch FAIL',

  DELETE = '[PictureBooks] Delete',
  DELETE_SUCCESS = '[PictureBooks] Delete SUCCESS',
  DELETE_FAIL = '[PictureBooks] Delete FAIL',

  SET_CURRENT_PICTURE_BOOK_ID = '[PictureBooks] SetCurrentPictureBookId',
}

export class LoadAll implements Action {
  type = PictureBooksActionTypes.LOAD_ALL;

  constructor(public payload = null) {
  }
}

export class LoadAllSuccess implements Action {
  type = PictureBooksActionTypes.LOAD_ALL_SUCCESS;

  constructor(public payload: PictureBook[]) {
  }
}

export class LoadAllFail implements Action {
  type = PictureBooksActionTypes.LOAD_ALL_FAIL;

  constructor(public payload: any) {
  }
}

export class Create implements Action {
  type = PictureBooksActionTypes.CREATE;

  constructor(public payload: PictureBook) {
  }
}

export class CreateSuccess implements Action {
  type = PictureBooksActionTypes.CREATE_SUCCESS;

  constructor(public payload: PictureBook) {
  }
}

export class CreateFail implements Action {
  type = PictureBooksActionTypes.CREATE_FAIL;

  constructor(public payload: any) {
  }
}

export class Load implements Action {
  type = PictureBooksActionTypes.LOAD;

  constructor(public payload: any) {
  }
}

export class LoadSuccess implements Action {
  type = PictureBooksActionTypes.LOAD_SUCCESS;

  constructor(public payload: PictureBook) {
  }
}

export class LoadFail implements Action {
  type = PictureBooksActionTypes.LOAD_FAIL;

  constructor(public payload: any) {
  }
}

export class Patch implements Action {
  type = PictureBooksActionTypes.PATCH;

  constructor(public payload: PictureBook) {
  }
}

export class PatchSuccess implements Action {
  type = PictureBooksActionTypes.PATCH_SUCCESS;

  constructor(public payload: Update<PictureBook>) {
  }
}

export class PatchFail implements Action {
  type = PictureBooksActionTypes.PATCH_FAIL;

  constructor(public payload: any) {
  }
}

export class Delete implements Action {
  type = PictureBooksActionTypes.DELETE;

  constructor(public payload: PictureBook) {
  }
}

export class DeleteSuccess implements Action {
  type = PictureBooksActionTypes.DELETE_SUCCESS;

  constructor(public payload: any) {
  }
}

export class DeleteFail implements Action {
  type = PictureBooksActionTypes.DELETE_FAIL;

  constructor(public payload: any) {
  }
}

export class SetCurrentPictureBookId implements Action {
  type = PictureBooksActionTypes.SET_CURRENT_PICTURE_BOOK_ID;

  constructor(public payload: any) {
  }
}

export type AllPictureBooksActions
  = LoadAll
  | LoadAllSuccess
  | LoadAllFail
  | Create
  | CreateSuccess
  | CreateFail
  | Load
  | LoadSuccess
  | LoadFail
  | Patch
  | PatchSuccess
  | PatchFail
  | Delete
  | DeleteSuccess
  | DeleteFail
  | SetCurrentPictureBookId
  ;
