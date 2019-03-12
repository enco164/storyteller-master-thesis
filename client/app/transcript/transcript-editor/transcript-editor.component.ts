import {Component, OnInit, Type} from '@angular/core';
import {AnnotationPopupComponent} from '../annotation-popup/annotation-popup.component';
import {TranscriptEditorService} from './transcript-editor.service';
import {Observable} from 'rxjs';
import {Annotation} from '../../shared/annotation/annotation';

@Component({
  selector: 'st-transcript-editor',
  templateUrl: './transcript-editor.component.html',
  styleUrls: ['./transcript-editor.component.scss'],
  providers: [TranscriptEditorService]
})
export class TranscriptEditorComponent implements OnInit {

  text: string;
  annotationPopupComponent: Type<AnnotationPopupComponent>;
  private annotations$: Observable<Annotation[]>;

  constructor(private transcriptEditorService: TranscriptEditorService) {
  }

  ngOnInit() {
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, aut beatae ducimus facilis laudantium nam nesciunt' +
      'officiis perferendis porro quidem sapiente sequi sunt temporibus unde. Aliquid laborum maiores veritatis! Lorem ipsum dolor sit ' +
      'amet, consectetur adipisicing elit. A adipisci, aut beatae ducimus facilis laudantium nam nesciunt officiis perferendis porro ' +
      'sapiente sequi sunt temporibus unde. Aliquid laborum maiores veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'A adipisci, aut beatae ducimus facilis laudantium nam nesciunt officiis perferendis porro quidem sapiente sequi sunt temporibus ' +
      'unde. Aliquid laborum maiores veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, aut beatae ducimus ' +
      'facilis laudantium nam nesciunt officiis perferendis porro quidem sapiente sequi sunt temporibus unde. Aliquid laborum ' +
      'maiores veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, aut beatae ducimus facilis laudantium ' +
      'nam nesciunt officiis perferendis porro quidem sapiente sequi sunt temporibus unde. Aliquid laborum maiores veritatis! Lorem ' +
      'ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, aut beatae ducimus facilis laudantium nam nesciunt officiis ' +
      'perferendis porro quidem sapiente sequi sunt temporibus unde. Aliquid laborum maiores veritatis! Lorem ipsum dolor sit amet, ' +
      'consectetur adipisicing elit. A adipisci, aut beatae ducimus facilis laudantium nam nesciunt officiis perferendis porro quidem ' +
      'sapiente sequi sunt temporibus unde. Aliquid laborum maiores veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'A adipisci, aut beatae ducimus facilis laudantium nam nesciunt officiis perferendis porro quidem sapiente sequi sunt temporibus ' +
      'unde. Aliquid laborum maiores veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, aut beatae ' +
      'ducimus facilis laudantium nam nesciunt officiis perferendis porro quidem sapiente sequi sunt temporibus unde. Aliquid laborum ' +
      'maiores veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, aut beatae ducimus facilis laudantium ' +
      'nam nesciunt officiis perferendis porro quidem sapiente sequi sunt temporibus unde. Aliquid laborum maiores veritatis! Lorem ' +
      'ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, aut beatae ducimus facilis laudantium nam nesciunt officiis ' +
      'perferendis porro quidem sapiente sequi sunt temporibus unde. Aliquid laborum maiores veritatis!';
    this.annotationPopupComponent = AnnotationPopupComponent;
    this.annotations$ = this.transcriptEditorService.annotations$;
  }

  onNewAnnotation(annotation) {
    this.transcriptEditorService.addAnnotation(annotation);
  }
}
