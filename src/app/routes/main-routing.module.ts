import { Routes } from '@angular/router';

import { MainComponent } from '@core/layouts/pages/main/main.component';

export const MainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
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
