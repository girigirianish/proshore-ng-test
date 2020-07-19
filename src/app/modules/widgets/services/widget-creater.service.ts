import { Injectable, ComponentFactoryResolver, ComponentRef, Type, ApplicationRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

import { WidgetContainerComponent } from '../components';

@Injectable()
export class WidgetCreaterService implements OnDestroy {
  private widgetContainerReference: ComponentRef<WidgetContainerComponent>;
  private readonly onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    // lets clean it up
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  constructor(private readonly componentFactory: ComponentFactoryResolver, private readonly appRef: ApplicationRef) {}

  /**
   *
   * Creates the provided component and attach it to given target.
   *
   * @param  content Any Component we can think off.
   * @param  target target view container ref where you want to render the container
   *
   */
  public createWidget<T>(content: Type<T>, target: ViewContainerRef): ComponentRef<T> {
    // let clean the container refrence if available
    if (this.widgetContainerReference) {
      this.removeWidgetContainerFromTarget(this.widgetContainerReference);
    }

    /**
     * go for attaching the  container to the provided view container reference.
     */
    this.widgetContainerReference = this.attachWidgetContainerToTarget(target);
    const widgetReference = this.attachWidget<T>(content, this.widgetContainerReference);
    return widgetReference;
  }

  /**
   * Attach the widget container to the given target.
   *
   * @param  target target view container ref where you want to render the container.
   */
  private attachWidgetContainerToTarget(target: ViewContainerRef): ComponentRef<WidgetContainerComponent> {
    const componentFactory = this.componentFactory.resolveComponentFactory(WidgetContainerComponent);
    const componentRef = target.createComponent(componentFactory);
    return componentRef;
  }

  /**
   *
   * Attach the widget to the widget to the widget container
   *
   * @param componentType widget that is to be attached to the container.
   * @param widgetContainer widget container component ref.
   */
  private attachWidget<T>(componentType: Type<T>, widgetContainer: ComponentRef<WidgetContainerComponent>): ComponentRef<T> {
    const componentFactory = this.componentFactory.resolveComponentFactory(componentType);
    const viewContainerRef = widgetContainer.instance.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    widgetContainer.instance.childComponentReference = viewContainerRef.createComponent(componentFactory);
    return widgetContainer.instance.childComponentReference;
  }

  /**
   *
   * It detaches the container from the view and destroys the
   * component
   *
   * @param widgetContainer widget container component reference
   */
  private removeWidgetContainerFromTarget(widgetContainer: ComponentRef<WidgetContainerComponent>): void {
    // let clean the container instance
    this.appRef.detachView(widgetContainer.hostView);
    widgetContainer.destroy();
  }
}
