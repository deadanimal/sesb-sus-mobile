import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceConnectionPage } from './service-connection.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceConnectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceConnectionPageRoutingModule {}
