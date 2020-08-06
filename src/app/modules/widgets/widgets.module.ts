import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetFirstComponent, WidgetSecondComponent, WidgetThirdComponent, WidgetContainerComponent } from './components';
import { WidgetCreaterPage } from './pages';
import { InsertionDirective } from './directives';
import { WidgetCreaterService } from './services';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    WidgetFirstComponent,
    WidgetSecondComponent,
    WidgetThirdComponent,
    WidgetCreaterPage,
    WidgetContainerComponent,
    InsertionDirective,
    ModalContainerComponent
  ],
  imports: [CommonModule, MatDialogModule],
  providers: [WidgetCreaterService],
  entryComponents: [WidgetFirstComponent, WidgetSecondComponent, WidgetThirdComponent, WidgetContainerComponent]
})
export class WidgetsModule {}
