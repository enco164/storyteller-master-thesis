import * as moment from 'moment';
import {Media} from './media.model';

export class Audio extends Media {
  recordingDate: moment.Moment;
}
