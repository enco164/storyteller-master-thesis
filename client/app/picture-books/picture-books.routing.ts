import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PictureBooksIndexComponent} from './containers/picture-books-index/picture-books-index.component';
import {PictureBookNewComponent} from './containers/picture-book-new/picture-book-new.component';
import {PictureBookEditComponent} from './containers/picture-book-edit/picture-book-edit.component';

const routes: Routes = [
  {path: '', component: PictureBooksIndexComponent},
  {path: 'new', component: PictureBookNewComponent},
  {path: ':id/edit', component: PictureBookEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PictureBooksRoutingModule {
}
