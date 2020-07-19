import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[proshoreInsertion]'
})
export class InsertionDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
