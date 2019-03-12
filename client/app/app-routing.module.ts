import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {AnnotationSchemeListComponent} from './annotation-scheme/annotation-scheme-list/annotation-scheme-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'kids', pathMatch: 'full'},
  {path: 'kids', loadChildren: 'app/kids/kids.module#KidsModule'},
  {path: 'picture-books', loadChildren: 'app/picture-books/picture-books.module#PictureBooksModule'},
  {path: 'media', loadChildren: 'app/media/media.module#MediaModule'},
  {path: 'sessions', loadChildren: 'app/session/session.module#SessionModule'},
  {path: 'annotation-schemes', loadChildren: 'app/annotation-scheme/annotation-scheme.module#AnnotationSchemeModule'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
