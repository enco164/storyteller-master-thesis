import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export abstract class BaseResource<T> {
  constructor(protected http: HttpClient, protected url: string) {
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  getById(id): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }
}
