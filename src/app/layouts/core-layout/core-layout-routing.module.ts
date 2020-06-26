import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreLayoutPage } from './core-layout.page';

const routes: Routes = [
  {
    path: '',
    component: CoreLayoutPage,
    children: [
      {
        path: 'bills',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/bills/bills.module').then(m => m.BillsPageModule)
          }
        ]
      },
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      },
      {
        path: 'outages',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/outages/outages.module').then(m => m.OutagesPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/core/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/core/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CoreLayoutPageRoutingModule {}
