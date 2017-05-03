import { Directive , ElementRef , Input, HostListener } from '@angular/core';

@Directive ({ selector: '[myHighlight]'})
export class HighlightDirective {
  constructor (private el : ElementRef){}
  
//Method for chaining the background color of the dom element.
    private highlight(color : string){
      this.el.nativeElement.style.backgroundColor = color;
    }

//@HostListener decorator lets you subscribe to events of the DOM element that hosts an antribute directive.
    @HostListener('mouseenter') onMouseEnter(){
      this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave(){
      this.highlight(null);
    }
}
