import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'kids', pathMatch: 'full'},
  {path: 'kids', loadChildren: 'app/kids/kids.module#KidsModule'},
  {path: 'picture-books', loadChildren: 'app/picture-books/picture-books.module#PictureBooksModule'},
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
export class AppRoutingModule { }
