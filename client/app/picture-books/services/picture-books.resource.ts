import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseResource} from '../../core/services/base-resource';
import {PictureBook} from '../models/picture-book.model';

@Injectable({
  providedIn: 'root'
})
export class PictureBooksResource extends BaseResource<PictureBook> {
  constructor(http: HttpClient) {
    super(http, '/api/picture-books');
  }

  getPictureBooks() {
    return this.getAll();
  }

  loadPictureBookById(id) {
    return this.getById(id);
  }

  createPictureBook(pictureBook: PictureBook) {
    return this.create(pictureBook);
  }

  patchPictureBook(pictureBook: PictureBook) {
    return this.update(pictureBook);
  }

  deletePictureBook(pictureBook: PictureBook) {
    return this.destroy(pictureBook);
  }
}
