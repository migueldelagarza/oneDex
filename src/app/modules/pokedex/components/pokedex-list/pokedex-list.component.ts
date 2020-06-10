import { Component } from '@angular/core';
import { PokeAPIService } from 'src/app/shared/services/poke-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'one-pokedex-list',
  template: `
  <section *ngIf="(pokemons$ | async)?.results as pokemons">
    <div align="center">
      <mat-hint>{{pokemons.length}} resultados</mat-hint>
      <h1 class="mat-h1 text-primary">{{title}}</h1>
    </div>
    <one-pokemon-list [pokemonList]="pokemons"></one-pokemon-list>
  </section>
  `,
  styles: [`
    section {
      padding: 16px;
    }
    mat-hint {
      margin: 0 auto;
    }
  `]
})
export class PokedexListComponent {
  title: string;
  pokemons$: Observable<any>;

  constructor(
    private pokeAPI: PokeAPIService
  ) {
    this.title = 'PokeDex Nacional';
    this.pokemons$ = pokeAPI.pokemons;
  }
}
