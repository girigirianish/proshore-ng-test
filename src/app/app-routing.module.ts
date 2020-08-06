import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WidgetCreaterPage } from '@proshore-ng-test/widgets/pages';

const ROUTES = {
  CREATE_WIDGET: 'create-widgets',
  DASHBOARD: 'dashboard'
};

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.DASHBOARD,
    pathMatch: 'full'
  },
  {
    path: ROUTES.CREATE_WIDGET,
    component: WidgetCreaterPage
  },
  {
    path: ROUTES.DASHBOARD,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
