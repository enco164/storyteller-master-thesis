import {DataSource} from "@angular/cdk/typings/collections";
import {AnnotationSchemeModel} from "./core/domain/annotation-scheme.model";
import {CollectionViewer} from "@angular/cdk/collections";
import {BehaviorSubject, Observable, of} from "rxjs";
import {AnnotationSchemesResource} from "./annotation-schemes.resource";
import {catchError, finalize} from "rxjs/operators";
import {ResourceResponse} from "./resource-response";
import {Meta} from "./meta";
import {Links} from "./links";
import {SortDirection} from "@angular/material";
import {GetAllAnnotationSchemesUsecase} from "./core/usecases/get-all-annotation-schemes.usecase";
import {CriteriaParams} from "../core/base/criteria-params";

export class AnnotationSchemesDataSource implements DataSource<AnnotationSchemeModel> {

  private resource: AnnotationSchemesResource;

  private dataSubject = new BehaviorSubject<AnnotationSchemeModel[]>([]);
  private metaSubject = new BehaviorSubject<Meta>({} as Meta);
  meta$ = this.metaSubject.asObservable();
  private linksSubject = new BehaviorSubject<Links>({} as Links);
  links$ = this.linksSubject.asObservable();
  private loadingSubject = new BehaviorSubject(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(private getAllAnnotationSchemeUsecase: GetAllAnnotationSchemesUsecase, resource: AnnotationSchemesResource) {
    this.resource = resource;
  }

  connect(collectionViewer: CollectionViewer): Observable<AnnotationSchemeModel[] | ReadonlyArray<AnnotationSchemeModel>> {
    return this.dataSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }

  loadAnnotationSchemes(filter = '', sortBy?: string, sortDirection: SortDirection = 'asc', pageNumber = 0, pageSize = 10): void {
    this.loadingSubject.next(true);
    this.getAllAnnotationSchemeUsecase.execute({filter, sortBy, sortDirection, pageNumber, pageSize})
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((res: ResourceResponse<AnnotationSchemeModel>) => {
        this.dataSubject.next(res.data);
        this.linksSubject.next(res.links);
        this.metaSubject.next(res.meta);
      });

    this.resource
      .getAll(filter, sortBy, sortDirection, pageNumber, pageSize)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((res: ResourceResponse<AnnotationSchemeModel>) => {
        this.dataSubject.next(res.data);
        this.linksSubject.next(res.links);
        this.metaSubject.next(res.meta);
      });
  }

}
