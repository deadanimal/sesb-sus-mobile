import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeTenancyPageRoutingModule } from './change-tenancy-routing.module';

import { ChangeTenancyPage } from './change-tenancy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeTenancyPageRoutingModule
  ],
  declarations: [ChangeTenancyPage]
})
export class ChangeTenancyPageModule {}
