import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicRoutes } from '../routes/main-routing.module';
import { PrivateRoutes } from '../routes/dashboard-routing.module';

@NgModule({
  imports: [RouterModule.forRoot([...PublicRoutes, ...PrivateRoutes, { path: '**', redirectTo: 'home' }])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
