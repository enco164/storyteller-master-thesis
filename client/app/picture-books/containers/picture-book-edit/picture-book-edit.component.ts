import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActionsSubject, Store} from '@ngrx/store';
import * as fromPictureBooks from '../../store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {PictureBook} from '../../models/picture-book.model';
import {Subscription} from 'rxjs/Subscription';
import {ofType} from '@ngrx/effects';
import {Load, Patch, PatchSuccess, PictureBooksActionTypes} from '../../store/actions/picture-books-actions';
import {filter} from 'rxjs/operators';
import {PictureBookFormComponent} from '../../components/picture-book-form/picture-book-form.component';

@Component({
  selector: 'st-picture-book-edit',
  templateUrl: './picture-book-edit.component.html',
  styleUrls: ['./picture-book-edit.component.scss']
})
export class PictureBookEditComponent implements OnInit, OnDestroy {

  @ViewChild('pictureBookForm')
  pictureBookForm: PictureBookFormComponent;

  model$: Observable<PictureBook>;
  redirectSub: Subscription;

  constructor(private store: Store<fromPictureBooks.State>,
              private activatedRoute: ActivatedRoute,
              private actionsSubject: ActionsSubject,
              private router: Router) {
  }

  ngOnInit() {
    this.model$ = this.store.select(fromPictureBooks.getCurrentPictureBook);

    this.activatedRoute.params.subscribe((params) => {
      this.store.dispatch(new Load(params['id']));
    });

    this.redirectSub = this.actionsSubject.pipe(
      ofType(PictureBooksActionTypes.PATCH_SUCCESS),
      filter((action: PatchSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['id'])
    ).subscribe(
      () => this.router.navigate(['/picture-books'])
    );
  }

  ngOnDestroy(): void {
    this.redirectSub.unsubscribe();
  }

  onSubmit() {
    this.store.dispatch(new Patch(this.pictureBookForm.model));
  }

}
