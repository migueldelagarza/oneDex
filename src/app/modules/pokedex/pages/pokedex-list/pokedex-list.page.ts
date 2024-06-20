import { Component, OnInit } from '@angular/core';
import { PageData } from '@constants/pages';
import { Observable, map } from 'rxjs';
import { PokeAPIService } from '@services/poke-api.service';
import { PageContent } from '@models/page';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'one-pokedex-list',
  template: `
  <section *ngIf="(pokemons$ | async) as pokemons">
      <h1 class="mat-h1 text-primary">{{page.title}}</h1>
    <one-pokemon-list [pokemonList]="pokemons"></one-pokemon-list>
  </section>
  `,
  styleUrls: ['./pokedex-list.page.sass']
})
export class PokedexListPage implements OnInit {
  page: PageContent;
  pokemons$: Observable<any>;

  constructor(private pokeAPI: PokeAPIService) {
    this.pokemons$ = this.pokeAPI.pokemonList
      .pipe(map((pokemonList) => {
        return pokemonList.map( (pokemon, idx) => {
          let idString = (idx + 1).toString();
          while (idString.length < 3) idString = '0' + idString;
          const imageUrl = environment.urlImages + idString + '.png'
          return { ...pokemon, id: idString, imageUrl }
        })
      })
    );
  }

  ngOnInit(): void {
    this.page = PageData.POKEDEX_PAGE;
  }
}
