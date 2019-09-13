import {Observable} from "rxjs";
import {AnnotationSchemeModel} from "../domain/annotation-scheme.model";
import {CriteriaParams} from "../../../core/base/criteria-params";

export abstract class AnnotationSchemeRepository {
  abstract getAllAnnotationSchemes(criteriaParams: CriteriaParams): Observable<AnnotationSchemeModel>;
}
