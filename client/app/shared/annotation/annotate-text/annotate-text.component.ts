import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  Type,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Annotation} from '../annotation';
import {AnnotationPopupService} from '../annotation-popup.service';
import {AnnotateTextService} from '../annotate-text.service';

@Component({
  selector: 'st-annotate-text',
  templateUrl: './annotate-text.component.html',
  styleUrls: ['./annotate-text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AnnotationPopupService, AnnotateTextService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnnotateTextComponent implements OnInit, OnChanges {

  @Input() text: string;
  @Input() annotations: Annotation[];
  @Input() popupComponent: Type<any>;
  @Output() newAnnotation = new EventEmitter<Annotation>();
  @ViewChild('container') private textContainer: ElementRef;
  private content: string;

  constructor(private changeDetector: ChangeDetectorRef,
              private annotateTextService: AnnotateTextService) {
  }

  ngOnInit() {
    this.content = this.annotateTextService.parseAnnotations(this.text, this.annotations);
  }

  onTextSelect(selection: Selection) {
    if (!this.shouldCreateAnnotation(selection)) {
      return;
    }
    const annotation = this.annotateTextService.createNewAnnotation(selection.getRangeAt(0), this.annotations);
    this.newAnnotation.emit(annotation);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.annotations && !changes.annotations.firstChange) {
      this.content = this.annotateTextService.parseAnnotations(this.text, this.annotations);
      const currentValue = changes.annotations.currentValue;
      const previousValue = changes.annotations.previousValue;
      if (currentValue.length <= previousValue.length) {
        return;
      }
      this.changeDetector.detectChanges();
      const annotation = currentValue.filter(o1 => previousValue.filter(o2 => o2.id === o1.id).length === 0)[0];
      const addedAnnotationElement = this.textContainer.nativeElement.querySelector(`[data-annotation-id="${annotation.id}"]`);

      setTimeout(() => {
        this.annotateTextService.showPopup(addedAnnotationElement, this.annotations, this.popupComponent);
      }, 0);
    }
  }

  private shouldCreateAnnotation(selection): boolean {
    const range = selection.getRangeAt(0);
    if (selection.isCollapsed) {
      // No text selected
      this.annotateTextService.showPopup(range.startContainer.parentElement, this.annotations, this.popupComponent);
      return false;
    }

    if (range.startContainer !== range.endContainer) {
      throw new Error('Partial node selected');
    }

    if (range.startContainer.parentNode.nodeName === 'SPAN') {
      const parentId = parseInt(range.startContainer.parentNode.getAttribute('data-annotation-id'), 10);

      if (!parentId) {
        throw new Error('Illegal selection');
      }
      throw new Error('Nested selection');
    }
    return true;
  }

}
