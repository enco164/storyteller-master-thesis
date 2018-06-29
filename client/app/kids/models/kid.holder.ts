import {Kid} from './kid.model';
import * as moment from 'moment';

export interface KidHolder {
  kid: Kid;
  yearOfBirth?: moment.Moment;
}
