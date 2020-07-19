import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';

import { WidgetCreaterService } from '../../services';
import { WidgetFirstComponent, WidgetSecondComponent, WidgetThirdComponent } from '../../components';

enum WIDGET_TO_RENDER {
  FIRST_WIDGET,
  SECOND_WIDGET,
  THIRD_WIDGET
}

@Component({
  selector: 'proshore-widget-creater',
  templateUrl: './widget-creater.page.html',
  styleUrls: ['./widget-creater.page.scss']
})
export class WidgetCreaterPage implements AfterViewInit {
  // specific slot in the page view where widgets are to be rendered
  @ViewChild('widgetContainerSlot', { read: ViewContainerRef })
  public readonly widgetContainerSlot: ViewContainerRef;

  constructor(private readonly widgetCreaterService: WidgetCreaterService) {}

  ngAfterViewInit(): void {
    this.creatWidget();
  }

  /**
   * Calls create widget api from widget creater service to
   * render the required widget
   *
   * @param widget the widget that is to be rendered
   */
  public creatWidget(widget?: WIDGET_TO_RENDER): void {
    let widgetToRender = null;
    switch (widget) {
      case WIDGET_TO_RENDER.FIRST_WIDGET:
        widgetToRender = WidgetFirstComponent;
        break;
      case WIDGET_TO_RENDER.SECOND_WIDGET:
        widgetToRender = WidgetSecondComponent;
        break;
      case WIDGET_TO_RENDER.THIRD_WIDGET:
        widgetToRender = WidgetThirdComponent;
        break;
      default:
        widgetToRender = WidgetFirstComponent;
    }
    this.widgetCreaterService.createWidget(widgetToRender, this.widgetContainerSlot);
  }
}
