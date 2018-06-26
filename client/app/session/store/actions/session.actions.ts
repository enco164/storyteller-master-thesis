import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {Session} from '../session.model';

export enum SessionActionTypes {

  LoadSessions = '[Session] Load Sessions',
  LoadSessionsSuccess = '[Session] Load Sessions SUCCESS',
  LoadSessionsFail = '[Session] Load Sessions FAIL',

  CreateSession = '[Session] Create Session',
  CreateSessionSuccess = '[Session] Create Session SUCCESS',
  CreateSessionFail = '[Session] Create Session FAIL',

  LoadSession = '[Session] Load Session',
  LoadSessionSuccess = '[Session] Load Session SUCCESS',
  LoadSessionFail = '[Session] Load Session FAIL',

  SetCurrentSessionId = '[Session] Set Current Session ID',

  UpdateSession = '[Session] Update Session',
  UpdateSessionSuccess = '[Session] Update Session SUCCESS',
  UpdateSessionFail = '[Session] Update Session FAIL',

  DeleteSession = '[Session] Delete Session',
  DeleteSessionSuccess = '[Session] Delete Session SUCCESS',
  DeleteSessionFail = '[Session] Delete Session FAIL',


  // AddSessions = '[Session] Add Sessions',
  // AddSessionsSuccess = '[Session] Add Sessions SUCCESS',
  // AddSessionsFail = '[Session] Add Sessions FAIL',
  // AddSession = '[Session] Add Session',
  // UpsertSession = '[Session] Upsert Session',
  // UpsertSessions = '[Session] Upsert Sessions',
  // UpdateSessions = '[Session] Update Sessions',
  // DeleteSessions = '[Session] Delete Sessions',
  // ClearSessions = '[Session] Clear Sessions'
}

export class LoadSessions implements Action {
  readonly type = SessionActionTypes.LoadSessions;

  constructor(public payload = null) {
  }
}

export class LoadSessionsSuccess implements Action {
  readonly type = SessionActionTypes.LoadSessionsSuccess;

  constructor(public payload: Session[]) {
  }
}

export class LoadSessionsFail implements Action {
  readonly type = SessionActionTypes.LoadSessionsFail;

  constructor(public payload: any) {
  }
}

export class CreateSession implements Action {
  readonly type = SessionActionTypes.CreateSession;

  constructor(public payload: Session) {
  }
}

export class CreateSessionSuccess implements Action {
  readonly type = SessionActionTypes.CreateSessionSuccess;

  constructor(public payload: Session) {
  }
}

export class CreateSessionFail implements Action {
  readonly type = SessionActionTypes.CreateSessionFail;

  constructor(public payload: any) {
  }
}

export class LoadSession implements Action {
  readonly type = SessionActionTypes.LoadSession;

  constructor(public payload: any) {
  }
}

export class LoadSessionSuccess implements Action {
  readonly type = SessionActionTypes.LoadSessionSuccess;

  constructor(public payload: Session) {
  }
}

export class LoadSessionFail implements Action {
  readonly type = SessionActionTypes.LoadSessionFail;

  constructor(public payload: any) {
  }
}

export class SetCurrentSessionId implements Action {
  readonly type = SessionActionTypes.SetCurrentSessionId;

  constructor(public payload: any) {
  }
}

export class UpdateSession implements Action {
  readonly type = SessionActionTypes.UpdateSession;

  constructor(public payload: Session) {
  }
}

export class UpdateSessionSuccess implements Action {
  readonly type = SessionActionTypes.UpdateSessionSuccess;

  constructor(public payload: Update<Session>) {
  }
}

export class UpdateSessionFail implements Action {
  readonly type = SessionActionTypes.UpdateSessionFail;

  constructor(public payload: any) {
  }
}

export class DeleteSession implements Action {
  readonly type = SessionActionTypes.DeleteSession;

  constructor(public payload: Session) {
  }
}

export class DeleteSessionSuccess implements Action {
  readonly type = SessionActionTypes.DeleteSessionSuccess;

  constructor(public payload: any) {
  }
}

export class DeleteSessionFail implements Action {
  readonly type = SessionActionTypes.DeleteSessionFail;

  constructor(public payload: any) {
  }
}

// // // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // //
// // // // // // // // // // //

//
// export class AddSession implements Action {
//   readonly type = SessionActionTypes.AddSession;
//
//   constructor(public payload: { session: Session }) {
//   }
// }
//
// export class UpsertSession implements Action {
//   readonly type = SessionActionTypes.UpsertSession;
//
//   constructor(public payload: { session: Session }) {
//   }
// }
//
// export class AddSessions implements Action {
//   readonly type = SessionActionTypes.AddSessions;
//
//   constructor(public payload: { sessions: Session[] }) {
//   }
// }
//
// export class UpsertSessions implements Action {
//   readonly type = SessionActionTypes.UpsertSessions;
//
//   constructor(public payload: { sessions: Session[] }) {
//   }
// }
//
// export class UpdateSessions implements Action {
//   readonly type = SessionActionTypes.UpdateSessions;
//
//   constructor(public payload: { sessions: Update<Session>[] }) {
//   }
// }
//
// export class DeleteSessions implements Action {
//   readonly type = SessionActionTypes.DeleteSessions;
//
//   constructor(public payload: { ids: string[] }) {
//   }
// }
//
// export class ClearSessions implements Action {
//   readonly type = SessionActionTypes.ClearSessions;
//
//   constructor(public payload = null) {
//   }
// }

export type SessionActions
  = LoadSessions
  | LoadSessionsSuccess
  | LoadSessionsFail
  | CreateSession
  | CreateSessionSuccess
  | CreateSessionFail
  | LoadSession
  | LoadSessionSuccess
  | LoadSessionFail
  | SetCurrentSessionId
  | UpdateSession
  | UpdateSessionSuccess
  | UpdateSessionFail
  | DeleteSession
  | DeleteSessionSuccess
  | DeleteSessionFail;

  // | AddSession
  // | AddSessions
  // | UpsertSession
  // | UpsertSessions
  // | UpdateSessions
  // | DeleteSessions
  // | ClearSessions;
