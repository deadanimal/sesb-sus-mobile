import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeTenancyPage } from './change-tenancy.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeTenancyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeTenancyPageRoutingModule {}
