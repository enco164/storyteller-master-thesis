import {BaseModel} from '../../core/models/base-model.model';
import {Kid} from '../../kids/models/kid.model';
import {PictureBook} from '../../picture-books/models/picture-book.model';

export interface Session extends BaseModel {
  dateOfSession: Date;
  kid: Kid;
  pictureBook: PictureBook;
}
