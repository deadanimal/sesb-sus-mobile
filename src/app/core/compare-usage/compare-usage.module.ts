import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompareUsagePageRoutingModule } from './compare-usage-routing.module';

import { CompareUsagePage } from './compare-usage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompareUsagePageRoutingModule
  ],
  declarations: [CompareUsagePage]
})
export class CompareUsagePageModule {}
