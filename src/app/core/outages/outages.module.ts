import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutagesPageRoutingModule } from './outages-routing.module';

import { OutagesPage } from './outages.page';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutagesPageRoutingModule,
    LeafletModule,
    FontAwesomeModule
  ],
  declarations: [OutagesPage]
})
export class OutagesPageModule {}
