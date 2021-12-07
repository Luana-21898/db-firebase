import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatingPage } from './seating.page';

const routes: Routes = [
  {
    path: '',
    component: SeatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatingPageRoutingModule {}
