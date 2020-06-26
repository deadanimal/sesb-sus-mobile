import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestDashboardPageRoutingModule } from './test-dashboard-routing.module';

import { TestDashboardPage } from './test-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestDashboardPageRoutingModule
  ],
  declarations: [TestDashboardPage]
})
export class TestDashboardPageModule {}
