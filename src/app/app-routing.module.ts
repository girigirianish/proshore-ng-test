import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidgetCreaterPage } from '@proshore-ng-test/widgets/pages';

const ROUTES = {
  CREATE_WIDGET: 'create-widgets'
};

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.CREATE_WIDGET,
    pathMatch: 'full'
  },
  {
    path: ROUTES.CREATE_WIDGET,
    component: WidgetCreaterPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
