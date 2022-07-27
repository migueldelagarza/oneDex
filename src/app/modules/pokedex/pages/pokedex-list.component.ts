import { Component, OnInit } from '@angular/core';
import { PageData } from '@constants/pages';
import { Observable } from 'rxjs';
import { PokeAPIService } from '@services/poke-api.service';
import { PageContent } from '@models/page';

@Component({
  selector: 'one-pokedex-list',
  template: `
  <section *ngIf="(pokemons$ | async) as pokemons">
    <div align="center">
      <!-- <mat-hint>{{pokemons.length}} {{page.subtitle}}</mat-hint> -->
      <h1 class="mat-h1 text-primary">{{page.title}}</h1>
    </div>
    <one-pokemon-list [pokemonList]="pokemons"></one-pokemon-list>
  </section>
  `
})
export class PokedexListComponent implements OnInit {
  page: PageContent;
  pokemons$: Observable<any>;
  
  constructor(private pokeAPI: PokeAPIService) {
    this.pokemons$ = this.pokeAPI.pokemons;
  }
  
  ngOnInit(): void {
    this.pokeAPI.loadPokemon(50);
    this.page = PageData.POKEDEX_PAGE;
  }
}
