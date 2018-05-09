import {Injectable} from '@angular/core';
import {KidModel} from '../model/kid.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class KidsService {

  private url = '/api/kids';

  constructor(private http: HttpClient) {
  }

  getKids(): Observable<KidModel[]> {
    return this.http.get<KidModel[]>(this.url);
  }

}
