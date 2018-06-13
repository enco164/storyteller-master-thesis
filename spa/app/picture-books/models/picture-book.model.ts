import {BaseModel} from '../../core/models/base-model.model';
import {Scene} from './scene.model';

export class PictureBook extends BaseModel {
  title: string;
  authors: string;
  publisher: string;
  yearOfPublishing: string;
  scenes: Scene[];
}
