import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AnnotationSchemeRepository} from "../../core/repositories/annotation-scheme.repository";
import {AnnotationSchemeModel} from "../../core/domain/annotation-scheme.model";
import {CriteriaParams} from "../../../core/base/criteria-params";
import {CriteriaParamsHttpMapper} from "../../../core/base/criteria-params-http.mapper";

@Injectable({
  providedIn: 'root'
})
export class AnnotationSchemeWebRepository extends AnnotationSchemeRepository {

  private resourceUrl = '/api/annotation-schemes';

  constructor(private http: HttpClient) {
    super();
  }

  getAllAnnotationSchemes(criteriaParams: CriteriaParams) {
    const params = CriteriaParamsHttpMapper.mapTo(criteriaParams);
    return this.http.get<AnnotationSchemeModel>(`${this.resourceUrl}`, {params});
  }

}
