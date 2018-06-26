import {BaseModel} from '../../core/models/base-model.model';
import {KidModel} from '../../kids/models/kid';
import {PictureBook} from '../../picture-books/models/picture-book.model';

export interface Session extends BaseModel {
  dateOfSession: Date;
  kid: KidModel;
  pictureBook: PictureBook;
}
