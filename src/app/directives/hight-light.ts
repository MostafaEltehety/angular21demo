import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightLight]',
})
export class HightLight {
 constructor(private el:ElementRef) {
   }

  @HostListener('mouseenter')
    onmouseenter(){
      this.el.nativeElement.style.backgroundColor="yellow";
    }

    @HostListener('mouseleave')
    onmouseleave(){
      this.el.nativeElement.style.backgroundColor="red";
    }

}
