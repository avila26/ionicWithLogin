import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodiosPage } from './episodios.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodiosPageRoutingModule {}
