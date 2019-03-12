import {Component, Inject, OnInit} from '@angular/core';
import {ANNOTATION_POPUP_DATA} from '../../shared/annotation/annotation-popup.tokens';
import {Annotation} from '../../shared/annotation/annotation';
import {AnnotationPopupRef} from '../../shared/annotation/annotation-popup-ref';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TranscriptEditorService} from '../transcript-editor/transcript-editor.service';

@Component({
  selector: 'st-annotation-popup',
  templateUrl: './annotation-popup.component.html',
  styleUrls: ['./annotation-popup.component.scss'],
})
export class AnnotationPopupComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(ANNOTATION_POPUP_DATA) public popupData: Annotation,
              @Inject(AnnotationPopupRef) public popupRef: AnnotationPopupRef,
              private formBuilder: FormBuilder,
              private transcriptEditorService: TranscriptEditorService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      comment: this.popupData.data.comment
    });
  }

  onSubmit() {
    this.popupData.data = this.form.getRawValue();
    this.popupRef.close();
  }

  onClose() {
    this.popupRef.close();
  }

  onRemove() {
    this.transcriptEditorService.removeAnnotationById(this.popupData.id);
    this.popupRef.close();
  }

}
