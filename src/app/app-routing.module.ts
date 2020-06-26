import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then( m => m.AuthLayoutPageModule)
  },
  {
    path: 'core',
    loadChildren: () => import('./layouts/core-layout/core-layout.module').then( m => m.CoreLayoutPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./core/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./core/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./landing/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'bills',
    loadChildren: () => import('./core/bills/bills.module').then( m => m.BillsPageModule)
  },
  {
    path: 'usage',
    loadChildren: () => import('./core/usage/usage.module').then( m => m.UsagePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./core/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'bill-detail',
    loadChildren: () => import('./core/bill-detail/bill-detail.module').then( m => m.BillDetailPageModule)
  },
  {
    path: 'bill-payment',
    loadChildren: () => import('./core/bill-payment/bill-payment.module').then( m => m.BillPaymentPageModule)
  },
  {
    path: 'profile-help',
    loadChildren: () => import('./core/profile-help/profile-help.module').then( m => m.ProfileHelpPageModule)
  },
  {
    path: 'profile-about',
    loadChildren: () => import('./core/profile-about/profile-about.module').then( m => m.ProfileAboutPageModule)
  },
  {
    path: 'profile-information',
    loadChildren: () => import('./core/profile-information/profile-information.module').then( m => m.ProfileInformationPageModule)
  },
  {
    path: 'profile-share',
    loadChildren: () => import('./core/profile-share/profile-share.module').then( m => m.ProfileSharePageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./core/profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },
  {
    path: 'outages',
    loadChildren: () => import('./core/outages/outages.module').then( m => m.OutagesPageModule)
  },
  {
    path: 'service-connection',
    loadChildren: () => import('./core/service-connection/service-connection.module').then( m => m.ServiceConnectionPageModule)
  },
  {
    path: 'compare-usage',
    loadChildren: () => import('./core/compare-usage/compare-usage.module').then( m => m.CompareUsagePageModule)
  },
  {
    path: 'move-in',
    loadChildren: () => import('./core/move-in/move-in.module').then( m => m.MoveInPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./core/calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'move-out',
    loadChildren: () => import('./core/move-out/move-out.module').then( m => m.MoveOutPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./core/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'change-tenancy',
    loadChildren: () => import('./core/change-tenancy/change-tenancy.module').then( m => m.ChangeTenancyPageModule)
  },
  {
    path: 'request-bill',
    loadChildren: () => import('./core/request-bill/request-bill.module').then( m => m.RequestBillPageModule)
  },
  {
    path: 'test-login',
    loadChildren: () => import('./example/test-login/test-login.module').then( m => m.TestLoginPageModule)
  },
  {
    path: 'test-dashboard',
    loadChildren: () => import('./example/test-dashboard/test-dashboard.module').then( m => m.TestDashboardPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
