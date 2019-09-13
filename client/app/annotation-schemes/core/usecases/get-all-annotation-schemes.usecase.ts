import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

import {AnnotationSchemeRepository} from "../repositories/annotation-scheme.repository";
import {UseCase} from "../../../core/base/use-case";
import {CriteriaParams} from "../../../core/base/criteria-params";
import {AnnotationSchemeModel} from "../domain/annotation-scheme.model";

@Injectable({
  providedIn: 'root'
})
export class GetAllAnnotationSchemesUsecase implements UseCase<CriteriaParams, AnnotationSchemeModel> {

  constructor(private annotationSchemeRepository: AnnotationSchemeRepository) {
  }

  execute(criteriaParams: CriteriaParams): Observable<AnnotationSchemeModel> {
    return this.annotationSchemeRepository.getAllAnnotationSchemes(criteriaParams);
  }
}
