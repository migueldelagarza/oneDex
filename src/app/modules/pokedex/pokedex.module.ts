import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokemonListComponent } from './components/pokemon-list.component';
import { PokemonViewComponent } from './components/pokemon-view.component';
import { SearchPokemonComponent } from './components/search-pokemon.component';
import { SearchFormComponent } from './components/search-form.component';
import { StatsComponent } from './components/stats.component';
import { PokedexListComponent } from './pages/pokedex-list.component';
import { RecentListComponent } from './pages/recent-list.component';
import { KeyboardComponent } from './pages/keyboard.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonViewComponent,
    SearchPokemonComponent,
    SearchFormComponent,
    StatsComponent,
    PokedexListComponent,
    RecentListComponent,
    KeyboardComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    SharedModule
  ]
})
export class PokedexModule { }
