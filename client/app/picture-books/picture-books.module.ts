import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PictureBooksIndexComponent} from './containers/picture-books-index/picture-books-index.component';
import {PictureBooksRoutingModule} from './picture-books.routing';
import {PictureBooksListComponent} from './components/picture-books-list/picture-books-list.component';
import {PictureBooksResource} from './services/picture-books.resource';
import {StoreModule} from '@ngrx/store';
import * as fromPictureBooks from './store';
import {EffectsModule} from '@ngrx/effects';
import {PictureBooksEffects} from './store/effects/picture-books-effects';
import {CustomMaterialModule} from '../shared/custom-material.module';
import {PictureBookNewComponent} from './containers/picture-book-new/picture-book-new.component';
import {PictureBookFormComponent} from './components/picture-book-form/picture-book-form.component';
import {PictureBookEditComponent} from './containers/picture-book-edit/picture-book-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,

    CustomMaterialModule,
    FormsModule,

    StoreModule.forFeature('pictureBooks', fromPictureBooks.reducers),
    EffectsModule.forFeature([PictureBooksEffects]),

    PictureBooksRoutingModule
  ],
  declarations: [
    PictureBooksIndexComponent,
    PictureBooksListComponent,
    PictureBookNewComponent,
    PictureBookFormComponent,
    PictureBookEditComponent],
  providers: [PictureBooksResource]
})
export class PictureBooksModule {
}
