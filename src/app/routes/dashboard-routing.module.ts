import { Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { DashboardComponent } from '@core/layouts/pages/dashboard/dashboard.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['home']);

export const DashboardRoutes: Routes = [
  {
    path: 'app',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('@pages/dashboard/dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
      {
        path: 'crud',
        loadChildren: () => import('@pages/dashboard/crud/crud.module').then((m) => m.CrudModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
    ],
  },
];
