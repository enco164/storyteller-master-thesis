import {Injectable} from '@angular/core';
import {Kid} from '../models/kid.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BaseResource} from '../../core/services/base-resource';

@Injectable()
export class KidsResource extends BaseResource<Kid> {

  constructor(http: HttpClient) {
    super(http, '/api/kids');
  }

  getKids(): Observable<Kid[]> {
    return this.getAll();
  }

  getKidById(id): Observable<Kid> {
    return this.getById(id);
  }

  updateKid(kid: Kid): Observable<Kid> {
    return this.update(kid);
  }

  createKid(kid: Kid): Observable<Kid> {
    return this.create(kid);
  }

  deleteKid(kid: Kid): Observable<Kid> {
    return this.destroy(kid);
  }
}
