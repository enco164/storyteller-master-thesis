import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseResource} from '../../core/services/base-resource';
import {Session} from '../store/session.model';

@Injectable()
export class SessionsResource extends BaseResource<Session> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'api/sessions');
  }

  getSessions() {
    return this.getAll();
  }

  createSession(session) {
    return this.create(session);
  }

  getSessionById(id) {
    return this.getById(id);
  }

  updateSession(session: Session) {
    return this.update(session);
  }

  deleteSession(session: Session) {
    return this.destroy(session);
  }
}
