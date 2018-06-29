import {Action} from '@ngrx/store';
import {Kid} from '../../models/kid.model';
import {Update} from '@ngrx/entity';

export enum KidsActionTypes {
  CREATE = '[Kids] CREATE',
  CREATE_SUCCESS = '[Kids] CREATE_SUCCESS',
  CREATE_FAIL = '[Kids] CREATE_FAIL',

  LOAD_ALL = '[Kids] LOAD ALL',
  LOAD_ALL_SUCCESS = '[Kids] LOAD ALL SUCCESS',
  LOAD_ALL_FAIL = '[Kids] LOAD ALL FAIL',

  LOAD = '[Kids] LOAD',
  LOAD_SUCCESS = '[Kids] LOAD SUCCESS',
  LOAD_FAIL = '[Kids] LOAD FAIL',

  PATCH = '[Kids] PATCH',
  PATCH_SUCCESS = '[Kids] PATCH SUCCESS',
  PATCH_FAIL = '[Kids] PATCH FAIL',

  DELETE = '[Kids] DELETE',
  DELETE_SUCCESS = '[Kids] DELETE SUCCESS',
  DELETE_FAIL = '[Kids] DELETE FAIL',

  SET_CURRENT_KID_ID = '[Kids] SET_CURRENT_KID_ID',
}

export class Create implements Action {
  type = KidsActionTypes.CREATE;

  constructor(public payload: Kid) {
  }
}

export class CreateSuccess implements Action {
  type = KidsActionTypes.CREATE_SUCCESS;

  constructor(public payload: Kid) {
  }
}

export class CreateFail implements Action {
  type = KidsActionTypes.CREATE_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadAll implements Action {
  type = KidsActionTypes.LOAD_ALL;

  constructor(public payload = null) {
  }
}

export class LoadAllSuccess implements Action {
  type = KidsActionTypes.LOAD_ALL_SUCCESS;

  constructor(public payload: Kid[]) {
  }
}

export class LoadAllFail implements Action {
  type = KidsActionTypes.LOAD_ALL_FAIL;

  constructor(public payload: any) {
  }
}

export class Load implements Action {
  type = KidsActionTypes.LOAD;

  constructor(public payload: any) {
  }
}

export class LoadSuccess implements Action {
  type = KidsActionTypes.LOAD_SUCCESS;

  constructor(public payload: Kid) {
  }
}

export class LoadFail implements Action {
  type = KidsActionTypes.LOAD_FAIL;

  constructor(public payload: any) {
  }
}

export class Patch implements Action {
  type = KidsActionTypes.PATCH;

  constructor(public payload: Kid) {
  }
}

export class PatchSuccess implements Action {
  type = KidsActionTypes.PATCH_SUCCESS;

  constructor(public payload: Update<Kid>) {
  }
}

export class PatchFail implements Action {
  type = KidsActionTypes.PATCH_FAIL;

  constructor(public payload: any) {
  }
}

export class Delete implements Action {
  type = KidsActionTypes.DELETE;

  constructor(public payload: Kid) {
  }
}

export class DeleteSuccess implements Action {
  type = KidsActionTypes.DELETE_SUCCESS;

  constructor(public payload: any) {
  }
}

export class DeleteFail implements Action {
  type = KidsActionTypes.DELETE_FAIL;

  constructor(public payload: any) {
  }
}

export class SetCurrentKidId implements Action {
  type = KidsActionTypes.SET_CURRENT_KID_ID;

  constructor(public payload: any) {
  }
}

export type AllKidsActions =
  | Create
  | CreateSuccess
  | CreateFail
  | LoadAll
  | LoadAllSuccess
  | LoadAllFail
  | Load
  | LoadSuccess
  | LoadFail
  | Patch
  | PatchSuccess
  | PatchFail
  | SetCurrentKidId
  | Delete
  | DeleteSuccess
  | DeleteFail
  ;
