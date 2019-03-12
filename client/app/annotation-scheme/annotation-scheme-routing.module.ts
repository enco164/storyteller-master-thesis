import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AnnotationSchemeListComponent} from './annotation-scheme-list/annotation-scheme-list.component';

const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: AnnotationSchemeListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnotationSchemeRoutingModule {
}
