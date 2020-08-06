import {
  Component,
  ViewChild,
  ComponentRef,
  OnDestroy,
  ChangeDetectionStrategy,
  Inject,
  OnInit,
  Type,
  ComponentFactoryResolver
} from '@angular/core';

import { InsertionDirective } from '../../directives';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'proshore-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetContainerComponent implements OnDestroy, OnInit {
  @ViewChild(InsertionDirective, { static: true })
  public insertionPoint: InsertionDirective;

  // the child component ref which is inserted in this containter component
  // Note here the any type is intentional as we will not be knowing the type of insertion
  public childComponentReference: ComponentRef<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly componentFactory: ComponentFactoryResolver) {}

  ngOnInit(): void {
    if (this.data.component) {
      this.attachWidget(this.data.component);
    }
  }

  private attachWidget<T>(componentType: Type<T>): void {
    const componentFactory = this.componentFactory.resolveComponentFactory(componentType);
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.childComponentReference = viewContainerRef.createComponent(componentFactory);
  }

  ngOnDestroy(): void {
    // lets wipe out child component
    if (this.childComponentReference) {
      this.childComponentReference.destroy();
    }
  }
}
