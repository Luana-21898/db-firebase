import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcertlistingPage } from './concertlisting.page';

const routes: Routes = [
  {
    path: '',
    component: ConcertlistingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcertlistingPageRoutingModule {}
