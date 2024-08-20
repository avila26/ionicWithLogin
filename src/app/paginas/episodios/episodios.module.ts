import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodiosPageRoutingModule } from './episodios-routing.module';

import { EpisodiosPage } from './episodios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodiosPageRoutingModule
  ],
  declarations: [EpisodiosPage]
})
export class EpisodiosPageModule {}
