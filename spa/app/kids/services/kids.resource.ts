import {Injectable} from '@angular/core';
import {KidModel} from '../models/kid';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {kidToResourceMapper, resourceToKidMapper} from '../kid-resource.mappers';
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
    return this.getById(id).map(kid => resourceToKidMapper(kid));
  }

  updateKid(kid: KidModel): Observable<KidModel> {
    return this.update(kidToResourceMapper(kid)).map(updatedKid => resourceToKidMapper(updatedKid));
  }

  createKid(kid: KidModel): Observable<KidModel> {
    return this.create(kidToResourceMapper(kid)).map(createdKid => resourceToKidMapper(createdKid));
  }

  deleteKid(kid: KidModel): Observable<KidModel> {
    return this.destroy(kid);
  }
}
