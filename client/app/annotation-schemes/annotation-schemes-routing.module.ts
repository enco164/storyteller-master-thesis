import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnnotationSchemesShellComponent} from "./annotation-schemes-shell/annotation-schemes-shell.component";
import {AnnotationSchemesIndexComponent} from "./annotation-schemes-index/annotation-schemes-index.component";
import {AnnotationSchemeFormComponent} from "./annotation-scheme-form/annotation-scheme-form.component";
import {AnnotationSchemeResolverService} from "./annotation-scheme-resolver.service";

const routes: Routes = [
  {
    path: '', component: AnnotationSchemesShellComponent, children: [
      {path: '', component: AnnotationSchemesIndexComponent},
      {
        path: 'edit/:id', component: AnnotationSchemeFormComponent, resolve: {scheme: AnnotationSchemeResolverService}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnotationSchemesRoutingModule {
}
