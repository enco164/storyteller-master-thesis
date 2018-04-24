import { Injectable } from '@angular/core';
import {of} from 'rxjs/observable/of';
import {KidModel} from '../model/kid.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class KidsService {

  constructor() { }

  getKids(): Observable<KidModel[]> {
    return of(KIDS);
  }

}

const KIDS: KidModel[] = Array(50)
  .fill({id: 1, firstName: 'Uros', lastName: 'Milenkovic'});
