import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Annotation} from '../../shared/annotation/annotation';

@Injectable()
export class TranscriptEditorService {
  private annotations = new BehaviorSubject<Annotation[]>([]);
  annotations$ = this.annotations.asObservable();

  addAnnotation(annotation: Annotation) {
    this.annotations.next(this.annotations.value.concat(annotation));
  }

  removeAnnotationById(id: number) {
    this.annotations.next(this.annotations.value.filter(a => id !== a.id));
  }
}
