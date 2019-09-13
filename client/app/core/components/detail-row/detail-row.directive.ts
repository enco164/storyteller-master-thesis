import {Directive, HostBinding, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[detailRow]'
})
export class DetailRowDirective {

  private row;
  private templateRef: TemplateRef<any>;
  private opened: boolean;

  constructor(public viewContainerRef: ViewContainerRef) {
  }

  @HostBinding('class.expanded')
  get expanded(): boolean {
    return this.opened;
  }

  @Input()
  set detailRow(value: any) {
    this.row = value;
  }

  @Input('detailRowTpl')
  set template(value: TemplateRef<any>) {
    this.templateRef = value;
  }

  @HostListener('click')
  onClick(): void {
    this.toggle();
  }

  private toggle(): void {
    if (this.opened) {
      this.viewContainerRef.clear()
    } else {
      this.render();
    }

    this.opened = this.viewContainerRef.length > 0;
  }

  private render(): void {
    this.viewContainerRef.clear();

    if (this.templateRef && this.row) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {$implicit: this.row})
    }
  }
}
