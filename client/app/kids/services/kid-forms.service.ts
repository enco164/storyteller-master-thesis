import {Injectable} from '@angular/core';
import {KidHolder} from '../models/kid.holder';
import {Kid} from '../models/kid.model';

@Injectable()
export class KidFormsService {

  constructor() {
  }

  getKidFromKidHolder(kidHolder: KidHolder): Kid {
    const yearOfBirth = kidHolder.yearOfBirth;
    return {
      ...kidHolder.kid,
      yearOfBirth: (yearOfBirth ? yearOfBirth.year() : null)
    };
  }
}
