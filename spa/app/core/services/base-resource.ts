import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class BaseResource<T> {
  constructor(protected http: HttpClient, protected url: string) {
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  getById(id): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  create(entity): Observable<T> {
    return this.http.post<T>(`${this.url}`, entity);
  }

  update(entity): Observable<T> {
    return this.http.put<T>(`${this.url}/${entity.id}`, entity);
  }

  destroy(entity): Observable<T> {
    return this.http.delete<T>(`${this.url}/${entity.id}`);
  }
}
