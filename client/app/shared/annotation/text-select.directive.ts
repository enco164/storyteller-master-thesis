import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[stTextSelect]'
})
export class TextSelectDirective {

  @Output()
  public textSelect: EventEmitter<Selection> = new EventEmitter();

  constructor() {
  }

  @HostListener('mouseup', ['$event.target'])
  onMouseUp(target) {
    const selection = document.getSelection();
    this.textSelect.next(selection);
    this.clearSelection();
  }

  private clearSelection() {
    if (window.getSelection && window.getSelection().empty) {
      return window.getSelection().empty();
    } else if (window.getSelection && window.getSelection().removeAllRanges) {
      return window.getSelection().removeAllRanges();
    }
  }
}
