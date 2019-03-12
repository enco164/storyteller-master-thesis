import {Injectable} from '@angular/core';
import {BaseResource} from '../../core/services/base-resource';
import {AnnotationScheme} from '../annotation-scheme.model';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class AnnotationSchemeResource extends BaseResource<AnnotationScheme> {
  constructor(http: HttpClient) {
    super(http, '/api/annotation-schemes');
  }

  loadAll(): Observable<AnnotationScheme[]> {
    return of([new AnnotationScheme(1), new AnnotationScheme(2)]);
  }
}
