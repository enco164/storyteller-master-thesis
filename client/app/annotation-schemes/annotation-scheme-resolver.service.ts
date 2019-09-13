import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {AnnotationSchemeModel} from "./core/domain/annotation-scheme.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AnnotationSchemesResource} from "./annotation-schemes.resource";

@Injectable()
export class AnnotationSchemeResolverService implements Resolve<AnnotationSchemeModel>{

  constructor(private resource: AnnotationSchemesResource) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AnnotationSchemeModel> | Observable<never> {
    let id = route.paramMap.get('id');

    return this.resource.getDetail(id);
  }

}
