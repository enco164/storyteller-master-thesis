import { Injectable } from '@angular/core';
import {of} from 'rxjs/observable/of';
import {KidModel} from '../model/kid.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class KidService {

  constructor() { }

  getKid(id: any): Observable<KidModel> {
    return of({id: 1, firstName: 'Uros', lastName: 'Milenkovic'});
  }

  saveKid(kid: KidModel) {

  }
}
