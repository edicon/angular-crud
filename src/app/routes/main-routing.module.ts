import { Routes } from '@angular/router';

import { PublicComponent } from '@core/layouts/pages/main/public.component';

export const PublicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('@pages/main/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'register',
        loadChildren: () => import('@pages/main/auth/register/register.module').then((m) => m.RegisterModule),
      },
    ],
  },
];
