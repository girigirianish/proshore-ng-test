import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetFirstComponent, WidgetSecondComponent, WidgetThirdComponent, WidgetContainerComponent } from './components';
import { WidgetCreaterPage } from './pages';
import { InsertionDirective } from './directives';
import { WidgetCreaterService } from './services';

@NgModule({
  declarations: [
    WidgetFirstComponent,
    WidgetSecondComponent,
    WidgetThirdComponent,
    WidgetCreaterPage,
    WidgetContainerComponent,
    InsertionDirective
  ],
  imports: [CommonModule],
  providers: [WidgetCreaterService],
  entryComponents: [WidgetFirstComponent, WidgetSecondComponent, WidgetThirdComponent, WidgetCreaterService]
})
export class WidgetsModule {}
