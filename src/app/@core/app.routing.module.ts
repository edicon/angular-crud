import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainRoutes } from '../routes/main-routing.module';
import { DashboardRoutes } from '../routes/dashboard-routing.module';

@NgModule({
  imports: [RouterModule.forRoot([...MainRoutes, ...DashboardRoutes, { path: '**', redirectTo: 'home' }])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
