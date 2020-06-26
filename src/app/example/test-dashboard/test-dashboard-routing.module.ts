import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestDashboardPage } from './test-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TestDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestDashboardPageRoutingModule {}
