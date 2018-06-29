import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import * as fromPictureBooks from '../../store';
import {Delete, LoadAll, SetCurrentPictureBookId} from '../../store/actions/picture-books-actions';
import {Observable} from 'rxjs';
import {PictureBook} from '../../models/picture-book.model';


@Component({
  selector: 'st-picture-books-index',
  templateUrl: './picture-books-index.component.html',
  styleUrls: ['./picture-books-index.component.scss']
})
export class PictureBooksIndexComponent implements OnInit {

  pictureBooks$: Observable<PictureBook[]>;
  isLoadingResults$: Observable<boolean>;

  constructor(private store: Store<fromPictureBooks.State>, private router: Router) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadAll());
    this.pictureBooks$ = this.store.select(fromPictureBooks.getAllPictureBooks);
    this.isLoadingResults$ = this.store.select(fromPictureBooks.getPictureBooksLoading);
  }

  editPictureBook(pictureBook: PictureBook) {
    this.store.dispatch(new SetCurrentPictureBookId(pictureBook.id));
    this.router.navigate(['/picture-books', pictureBook.id, 'edit']);
  }

  removePictureBook(pictureBook: PictureBook) {
    const result = confirm(`Are you sure you want to remove ${pictureBook.title}?`);
    if (result) {
      this.store.dispatch(new Delete(pictureBook));
    }
  }
}
