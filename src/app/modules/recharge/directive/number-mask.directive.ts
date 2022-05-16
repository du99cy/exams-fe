import { Directive, ElementRef, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";
import Utilities from "@core/utilities/utilities";

@Directive({
  selector: 'input[numbermask]'
})
export class NumberMask{
  constructor(private control: NgControl, private el: ElementRef){}
  @HostListener('input', ['$event.target']) onInput(target:any){
    console.log('test', target?.value)
    this.el.nativeElement.value = Utilities.convertStringToNumber(target.value)
  }
}
