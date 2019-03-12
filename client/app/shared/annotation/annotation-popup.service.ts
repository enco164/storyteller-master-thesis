import {ElementRef, Injectable, Injector, Type} from '@angular/core';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {Overlay, OverlayConfig, OverlayRef, PositionStrategy} from '@angular/cdk/overlay';
import {AnnotationPopupRef} from './annotation-popup-ref';
import {Annotation} from './annotation';
import {ANNOTATION_POPUP_DATA} from './annotation-popup.tokens';
import {merge} from 'rxjs';

interface AnnotationPopupConfig {
  hasBackdrop?: boolean;
  annotation?: Annotation;
  connectedToElementRef: ElementRef | HTMLElement;
  component: Type<any>;
}

const DEFAULT_CONFIG = {
  hasBackdrop: true,
  backdropClass: 'mat-overlay-transparent-backdrop',
};

@Injectable()
export class AnnotationPopupService {

  constructor(private overlay: Overlay, private injector: Injector) {
  }

  open(config: AnnotationPopupConfig): AnnotationPopupRef {
    const popupConfig = {...DEFAULT_CONFIG, ...config};

    const overlayRef = this.createOverlay(popupConfig);
    const popupRef = new AnnotationPopupRef(overlayRef);
    merge(
      overlayRef.backdropClick(),
      overlayRef.detachments(),
    ).subscribe(() => popupRef.close());

    this.attachPopup(overlayRef, popupRef, popupConfig);

    return popupRef;
  }

  private attachPopup(overlayRef: OverlayRef, popupRef: AnnotationPopupRef, config: AnnotationPopupConfig) {
    const injector = this.createInjector(config, popupRef);
    const popupPortal = new ComponentPortal(config.component, null, injector);
    const popupContainerRef = overlayRef.attach(popupPortal);
    return popupContainerRef.instance;
  }

  private createOverlay(config: AnnotationPopupConfig): OverlayRef {
    const overlayConfig = this.createOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private createOverlayConfig(config: AnnotationPopupConfig): OverlayConfig {
    const positionStrategy = this.createPopupPositionStrategy(config.connectedToElementRef);

    return new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
  }

  private createInjector(config: AnnotationPopupConfig, popupRef: AnnotationPopupRef) {
    const injectionTokens = new WeakMap();

    injectionTokens.set(AnnotationPopupRef, popupRef);
    injectionTokens.set(ANNOTATION_POPUP_DATA, config.annotation);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private createPopupPositionStrategy(connectedToElementRef?: ElementRef | HTMLElement): PositionStrategy {
    return this.overlay.position()
      .flexibleConnectedTo(connectedToElementRef)
      .withTransformOriginOn('.text-annotation')
      .withFlexibleDimensions(false)
      .withViewportMargin(32)
      .withLockedPosition()
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top'
        },
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'bottom'
        }
      ]);
  }
}
