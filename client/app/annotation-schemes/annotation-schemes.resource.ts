import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";

import {AnnotationSchemeModel} from "./core/domain/annotation-scheme.model";
import {ResourceResponse} from "./resource-response";
import {SortDirection} from "@angular/material";


@Injectable()
export class AnnotationSchemesResource {

  private resourceUrl = '/api/annotation-schemes';

  constructor(private http: HttpClient) {

  }

  getAll(filter = '', sortBy: string = '', sortDirection: SortDirection = 'asc', pageNumber = 0, pageSize = 10): Observable<ResourceResponse<AnnotationSchemeModel>> {
    let httpParams = new HttpParams();

    if (filter) {
      httpParams = httpParams.set('filter', filter);
    }
    if (sortBy) {
      httpParams = httpParams.set('sort_by', sortBy)
        .set('sort_direction', sortDirection)
    }

    httpParams = httpParams
      .set('page', (pageNumber + 1).toString())
      .set('per_page', pageSize.toString());

    return this.http.get<ResourceResponse<AnnotationSchemeModel>>(this.resourceUrl,
      {
        params: httpParams
      });
  }

  getDetail(id): Observable<AnnotationSchemeModel> {
    return this.http.get<AnnotationSchemeModel>(this.resourceUrl + '/' + id);
  }

  getAnnotationSchemas(): Observable<AnnotationSchemeModel[]> {
    return of([]);// this.getAll().pipe(map(response => response.data));
  }
}
