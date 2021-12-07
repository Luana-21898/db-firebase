import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatingPageRoutingModule } from './seating-routing.module';

import { SeatingPage } from './seating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatingPageRoutingModule
  ],
  declarations: [SeatingPage]
})
export class SeatingPageModule {}
