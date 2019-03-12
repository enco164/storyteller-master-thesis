import {OverlayRef} from '@angular/cdk/overlay';

export class AnnotationPopupRef {
  constructor(private overlayRef: OverlayRef) {
  }

  close() {
    this.overlayRef.dispose();
  }
}
