import * as moment from 'moment';
import {BaseModel} from '../../core/models/base-model.model';

export class KidModel extends BaseModel {
  firstName: string;
  lastName: string;
  yearOfBirth: moment.Moment;
  cityOfBirth: string;
  stateOfBirth: string;
  educationMother: string;
  educationFather: string;
}
