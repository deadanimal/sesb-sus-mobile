import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestBillPageRoutingModule } from './request-bill-routing.module';

import { RequestBillPage } from './request-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestBillPageRoutingModule
  ],
  declarations: [RequestBillPage]
})
export class RequestBillPageModule {}
