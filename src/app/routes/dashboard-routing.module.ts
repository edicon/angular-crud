import { Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { PrivateComponent } from '@core/layouts/pages/dashboard/private.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['home']);

export const PrivateRoutes: Routes = [
  {
    path: 'app',
    component: PrivateComponent,
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
