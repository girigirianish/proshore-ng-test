import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WidgetContainerComponent } from '../components';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private dailoge: MatDialog) {}

  public open(componentRef: any, config?: any) {
    if (config && config.data) {
      config.data = {
        ...config.data,
        component: componentRef
      };
    }
    return this.dailoge.open(WidgetContainerComponent, this.preparModalConfig(componentRef, config));
  }

  private preparModalConfig(componentRef, config): any {
    if (!config) {
      return {
        data: {
          component: componentRef
        }
      };
    }

    if (!config.data) {
      return {
        ...config,
        data: {
          component: componentRef
        }
      };
    }

    config.data = {
      ...config.data,
      component: componentRef
    };
    return config;
  }
}
