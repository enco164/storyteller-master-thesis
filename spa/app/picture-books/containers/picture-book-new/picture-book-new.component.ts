import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActionsSubject, Store} from '@ngrx/store';
import {Router} from '@angular/router';
import * as fromPictureBooks from '../../store';
import {Subscription} from 'rxjs/index';
import {PictureBook} from '../../models/picture-book.model';
import {ofType} from '@ngrx/effects';
import {Create, CreateSuccess, PictureBooksActionTypes} from '../../store/actions/picture-books-actions';
import {PictureBookFormComponent} from '../../components/picture-book-form/picture-book-form.component';

@Component({
  selector: 'st-picture-book-new',
  templateUrl: './picture-book-new.component.html',
  styleUrls: ['./picture-book-new.component.scss']
})
export class PictureBookNewComponent implements OnInit, OnDestroy {

  @ViewChild('pictureBookForm')
  pictureBookForm: PictureBookFormComponent;

  private redirectSub: Subscription;

  constructor(private store: Store<fromPictureBooks.State>,
              private actionsSubject: ActionsSubject,
              private router: Router) { }

  ngOnInit() {
    this.redirectSub = this.actionsSubject.asObservable().pipe(
      ofType(PictureBooksActionTypes.CREATE_SUCCESS)
    ).subscribe(
      (action: CreateSuccess) => this.router.navigate(['/picture-books'])
    );
  }

  ngOnDestroy(): void {
    this.redirectSub.unsubscribe();
  }

  onSubmit() {
    this.store.dispatch(new Create(this.pictureBookForm.model));
  }
}
