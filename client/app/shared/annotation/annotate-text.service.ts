import {Injectable, Type} from '@angular/core';
import {Annotation} from './annotation';
import {AnnotationPopupService} from './annotation-popup.service';

@Injectable()
export class AnnotateTextService {

  constructor(private popupService: AnnotationPopupService) {
  }

  static sortAnnotationsByEndIndex(annotations: Annotation[]) {
    return annotations.sort(function (a, b) {
      if (a.endIndex < b.endIndex) {
        return -1;
      } else if (a.endIndex > b.endIndex) {
        return 1;
      }
      return 0;
    });
  }

  static getAnnotationById(annotations: Annotation[], id) {
    return annotations.find(a => a.id === id);
  }

  static getStartAnnotationTemplate(annotation: Annotation) {
    return `<span class="text-annotation" data-annotation-id="${annotation.id}">`;
  }

  static getEndAnnotationTemplate() {
    return '</span>';
  }

  parseAnnotations(text: string, annotations: Annotation[] = []): string {
    if (annotations.length === 0) {
      return text;
    }

    annotations = AnnotateTextService.sortAnnotationsByEndIndex(annotations);
    annotations.slice().reverse().forEach(annotation => {
      text = this.insertAt(text, annotation.endIndex, AnnotateTextService.getEndAnnotationTemplate());
      text = this.insertAt(text, annotation.startIndex, AnnotateTextService.getStartAnnotationTemplate(annotation));
    });
    return text;
  }

  showPopup(connectedToElementRef: HTMLElement, annotations: Annotation[], popupComponent: Type<any>) {
    const annotation = this.getAnnotationFromElementRef(connectedToElementRef, annotations);
    if (!annotation) {
      return;
    }
    this.popupService.open({
      annotation: annotation,
      connectedToElementRef,
      component: popupComponent
    });
  }

  createNewAnnotation(range, annotations: Annotation[]) {
    const annotation = new Annotation(range.startOffset, range.endOffset);

    if (annotations.length) {
      const prevSiblingSpan = range.startContainer.previousSibling;
      if (prevSiblingSpan != null) {
        const prevSiblingId = parseInt(prevSiblingSpan.getAttribute('data-annotation-id'), 10);
        if (!prevSiblingId) {
          throw new Error('Illegal selection');
        }
        const prevAnnotation = AnnotateTextService.getAnnotationById(annotations, prevSiblingId);
        annotation.startIndex = prevAnnotation.endIndex + range.startOffset;
        annotation.endIndex = prevAnnotation.endIndex + range.endOffset;
      }
    }
    return annotation;
  }

  private insertAt(text: string, index: number, string: string) {
    return text.substr(0, index) + string + text.substr(index);
  }

  private getAnnotationFromElementRef(connectedToElementRef: HTMLElement, annotations: Annotation[]): Annotation {
    if (!connectedToElementRef) {
      return null;
    }
    const annotationId = +connectedToElementRef.getAttribute('data-annotation-id');
    if (!annotationId) {
      return null;
    }
    return annotations.find(a => a.id === annotationId);
  }
}
