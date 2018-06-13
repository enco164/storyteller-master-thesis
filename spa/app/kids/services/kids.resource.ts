import {Injectable} from '@angular/core';
import {KidModel} from '../models/kid';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BaseResource} from '../../core/services/base-resource';

@Injectable()
export class KidsResource extends BaseResource<KidModel> {

  constructor(http: HttpClient) {
    super(http, '/api/kids');
  }

  getKids(): Observable<KidModel[]> {
    return this.getAll();
  }

  getKidById(id): Observable<KidModel> {
    return this.getById(id);
  }

  updateKid(kid: KidModel): Observable<KidModel> {
    return this.update(kid);
  }

  createKid(kid: KidModel): Observable<KidModel> {
    return this.create(kid);
  }

  deleteKid(kid: KidModel): Observable<KidModel> {
    return this.destroy(kid);
  }
}
