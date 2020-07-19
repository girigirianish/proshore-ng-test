import { Component, ViewChild, ComponentRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { InsertionDirective } from '../../directives';

@Component({
  selector: 'proshore-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetContainerComponent implements OnDestroy {
  @ViewChild(InsertionDirective, { static: true })
  public insertionPoint: InsertionDirective;

  // the child component ref which is inserted in this containter component
  // Note here the any type is intentional as we will not be knowing the type of insertion
  public childComponentReference: ComponentRef<any>;

  constructor() {}

  ngOnDestroy(): void {
    // lets wipe out child component
    if (this.childComponentReference) {
      this.childComponentReference.destroy();
    }
  }
}
