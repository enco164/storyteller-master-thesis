import {Injectable} from '@angular/core';
import {KidModel} from '../models/kid.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {resourceToKidMapper} from '../kid-resource.mappers';

@Injectable()
export class KidsService {

  private url = '/api/kids';

  constructor(private http: HttpClient) {
  }

  getKids(): Observable<KidModel[]> {
    return this.http.get<KidModel[]>(this.url).map(kids => kids.map(resourceToKidMapper));
  }

}
