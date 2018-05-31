import * as moment from 'moment';

export interface KidModel {
  id: any;
  firstName: string;
  lastName: string;
  yearOfBirth: moment.Moment;
  cityOfBirth: string;
  stateOfBirth: string;
  educationMother: string;
  educationFather: string;
}
