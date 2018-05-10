import {Injectable} from '@angular/core';
import {KidModel} from '../models/kid.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {resourceToKidMapper} from '../kid-resource.mappers';
import {BaseResource} from '../../core/services/base-resource';

@Injectable()
export class KidsResource extends BaseResource<KidModel> {

  constructor(http: HttpClient) {
    super(http, '/api/kids');
  }

  getKids(): Observable<KidModel[]> {
    return this.getAll().map(kids => kids.map(resourceToKidMapper));
  }

  getKidById(id): Observable<KidModel> {
    return this.getKidById(id).map(kid => resourceToKidMapper(kid));
  }

}
