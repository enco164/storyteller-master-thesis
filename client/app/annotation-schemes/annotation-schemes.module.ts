import {NgModule} from '@angular/core';

import {AnnotationSchemesRoutingModule} from './annotation-schemes-routing.module';
import {AnnotationSchemesShellComponent} from './annotation-schemes-shell/annotation-schemes-shell.component';
import {AnnotationSchemesIndexComponent} from './annotation-schemes-index/annotation-schemes-index.component';
import {AnnotationSchemesSandboxService} from "./annotation-schemes-sandbox.service";
import {AnnotationSchemesResource} from "./annotation-schemes.resource";
import {SharedModule} from "../shared/shared.module";
import { AnnotationSchemeFormComponent } from './annotation-scheme-form/annotation-scheme-form.component';
import {AnnotationSchemeResolverService} from "./annotation-scheme-resolver.service";

@NgModule({
  declarations: [AnnotationSchemesShellComponent, AnnotationSchemesIndexComponent, AnnotationSchemeFormComponent],
  imports: [
    SharedModule,
    AnnotationSchemesRoutingModule,
  ],
  providers: [AnnotationSchemesSandboxService, AnnotationSchemesResource, AnnotationSchemeResolverService]
})
export class AnnotationSchemesModule {
}
