import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoveInPageRoutingModule } from './move-in-routing.module';

import { MoveInPage } from './move-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoveInPageRoutingModule
  ],
  declarations: [MoveInPage]
})
export class MoveInPageModule {}
