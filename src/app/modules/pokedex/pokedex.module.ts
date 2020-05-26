import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexListComponent } from './components/pokedex-list/pokedex-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PokedexListComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    SharedModule
  ]
})
export class PokedexModule { }
