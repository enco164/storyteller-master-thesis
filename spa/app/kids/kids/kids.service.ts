import { Injectable } from '@angular/core';
import {of} from 'rxjs/observable/of';
import {KidModel} from '../model/kid.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class KidsService {

  constructor() { }

  getKids(): Observable<KidModel[]> {
    return of(KIDS).delay(3000);
  }

}

const KIDS: KidModel[] = [
  {firstName: 'Uros', lastName: 'Milenkovic'},
];
