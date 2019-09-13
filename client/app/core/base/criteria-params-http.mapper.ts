import {HttpParams} from "@angular/common/http";

import {CriteriaParams} from "./criteria-params";

export class CriteriaParamsHttpMapper {
  static mapTo(criteriaParams: CriteriaParams) {
    let httpParams = new HttpParams();

    if (criteriaParams.filter) {
      httpParams = httpParams.set('filter', criteriaParams.filter);
    }
    if (criteriaParams.sortBy) {
      httpParams = httpParams.set('sort_by', criteriaParams.sortBy)
        .set('sort_direction', criteriaParams.sortDirection)
    }

    httpParams = httpParams
      .set('page', (criteriaParams.pageNumber + 1).toString())
      .set('per_page', criteriaParams.pageSize.toString());

    return httpParams;
  }
}
