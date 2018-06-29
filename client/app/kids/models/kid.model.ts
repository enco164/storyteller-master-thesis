import * as moment from 'moment';
import {BaseModel} from '../../core/models/base-model.model';

export class Kid extends BaseModel {
  firstName: string;
  lastName: string;
  yearOfBirth: number;
  cityOfBirth: string;
  stateOfBirth: string;
  educationMother: string;
  educationFather: string;
  gender: string;
}
