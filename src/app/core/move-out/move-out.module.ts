import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoveOutPageRoutingModule } from './move-out-routing.module';

import { MoveOutPage } from './move-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoveOutPageRoutingModule
  ],
  declarations: [MoveOutPage]
})
export class MoveOutPageModule {}
