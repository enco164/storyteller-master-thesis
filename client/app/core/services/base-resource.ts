import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ChangeCase} from './change-case';
import camelCase = ChangeCase.camelCase;
import snakeCase = ChangeCase.snakeCase;

export abstract class BaseResource<T> {
  constructor(private http: HttpClient, private url: string) {
  }

  protected getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url).pipe(
      map(camelCase)
    );
  }

  protected getById(id): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`).pipe(
      map(camelCase)
    );
  }

  protected create(entity): Observable<T> {
    return this.http.post<T>(`${this.url}`, snakeCase(entity)).pipe(
      map(camelCase)
    );
  }

  protected update(entity): Observable<T> {
    return this.http.put<T>(`${this.url}/${entity.id}`, snakeCase(entity)).pipe(
      map(camelCase)
    );
  }

  protected destroy(entity): Observable<T> {
    return this.http.delete<T>(`${this.url}/${entity.id}`);
  }
}
