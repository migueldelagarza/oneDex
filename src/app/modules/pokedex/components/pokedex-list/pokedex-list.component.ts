import { Component } from '@angular/core';
import { PokeAPIService } from 'src/app/shared/services/poke-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'one-pokedex-list',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{title}}</mat-card-title>
      </mat-card-header>
      <mat-card-content *ngIf="(pokemons$ | async)?.results as pokemons">
        <one-pokemon-list [pokemonList]="pokemons"></one-pokemon-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: [``]
})
export class PokedexListComponent {
  title: string;
  pokemons$: Observable<any>;

  constructor(
    private pokeAPI: PokeAPIService
  ) {
    this.title = 'Dex Nacional';
    this.pokemons$ = pokeAPI.pokemons;
  }
}
