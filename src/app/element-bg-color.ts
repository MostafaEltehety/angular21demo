import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appElementBgColor]',

})
export class ElementBgColor {
  constructor(private elementRef: ElementRef) {}

  setColor(color: string): void {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
