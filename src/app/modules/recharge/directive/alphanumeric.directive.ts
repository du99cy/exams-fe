import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import Utilities from '@core/utilities/utilities';

@Directive({ selector: 'input[alphanumeric]' })
export class Alphanumeric {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  @HostListener('input', ['$event']) onInput(event:any) {
    console.log('test2', event)
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  @HostListener('paste', ['$event']) onPaste(event:any){
    console.log(this.el, this.el.nativeElement?.value)
    // console.log(this.el, Utilities.convertStringToNumber(this.el.nativeElement?.target?.value));
    // this.el.nativeElement.value = Utilities.convertStringToNumber(event.target.value);
  }
}
