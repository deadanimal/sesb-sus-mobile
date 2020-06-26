import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceConnectionPageRoutingModule } from './service-connection-routing.module';

import { ServiceConnectionPage } from './service-connection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceConnectionPageRoutingModule
  ],
  declarations: [ServiceConnectionPage]
})
export class ServiceConnectionPageModule {}
