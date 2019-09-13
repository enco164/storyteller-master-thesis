import {Injectable} from '@angular/core';
import {AnnotationSchemesResource} from "./annotation-schemes.resource";
import {BehaviorSubject} from "rxjs";
import {AnnotationSchemeModel} from "./core/domain/annotation-scheme.model";
import {GetAllAnnotationSchemesUsecase} from "./core/usecases/get-all-annotation-schemes.usecase";

@Injectable({
  providedIn: 'root'
})
export class AnnotationSchemesSandboxService {

  private annotationSchemesSubject = new BehaviorSubject<AnnotationSchemeModel[]>([]);
  private annotationSchemesLoadingSubject = new BehaviorSubject<boolean>(false);


  public annotationSchemesLoading$ = this.annotationSchemesLoadingSubject.asObservable();
  public annotationSchemes$ = this.annotationSchemesSubject.asObservable();

  constructor(private annotationSchemesResource: AnnotationSchemesResource, private getAllAnnotationSchemeUsecase: GetAllAnnotationSchemesUsecase) {
  }

  loadAnnotationSchemes() {
    this.annotationSchemesLoadingSubject.next(true);
    this.getAllAnnotationSchemeUsecase.execute()

    this.annotationSchemesResource.getAnnotationSchemas()
      .subscribe(schemes => {
        this.annotationSchemesSubject.next(schemes);
        this.annotationSchemesLoadingSubject.next(false);
      });
  }
}
