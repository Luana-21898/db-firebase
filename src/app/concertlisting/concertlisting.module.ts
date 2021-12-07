import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcertlistingPageRoutingModule } from './concertlisting-routing.module';

import { ConcertlistingPage } from './concertlisting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConcertlistingPageRoutingModule
  ],
  declarations: [ConcertlistingPage]
})
export class ConcertlistingPageModule {}
