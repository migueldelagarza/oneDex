import { Component, OnInit } from '@angular/core';
import { PageData } from '@constants/pages';
import { Observable, map } from 'rxjs';
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
    this.pokemons$ = this.pokeAPI.pokemonList
      .pipe(map((pokemonList) => {
        return pokemonList.map( (pokemon, idx) => {
          let idString = (idx + 1).toString();
          while (idString.length < 3) idString = '0' + idString;
          const imageUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + idString + '.png'
          return { ...pokemon, id: idString, imageUrl }
        })
      })
    );
  }

  ngOnInit(): void {
    this.page = PageData.POKEDEX_PAGE;
  }
}
