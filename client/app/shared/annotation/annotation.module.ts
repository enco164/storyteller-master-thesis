import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnnotateTextComponent} from './annotate-text/annotate-text.component';
import {TextSelectDirective} from './text-select.directive';
import {SafeHtmlPipe} from './safe-html.pipe';
import {AnnotationPopupService} from './annotation-popup.service';

@NgModule({
  imports: [
    CommonModule
  ],
  // providers: [AnnotationPopupService],
  declarations: [AnnotateTextComponent, TextSelectDirective, SafeHtmlPipe],
  exports: [AnnotateTextComponent]
})
export class AnnotationModule {
}
