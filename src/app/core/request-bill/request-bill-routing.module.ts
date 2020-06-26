import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestBillPage } from './request-bill.page';

const routes: Routes = [
  {
    path: '',
    component: RequestBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestBillPageRoutingModule {}
