import { Component, Input, HostListener } from '@angular/core';
import { DetailPokemonService } from 'src/app/core/services/detail-pokemon.service';
import { PokeAPIService } from '../../services/poke-api.service';

@Component({
  selector: 'one-pokemon-list',
  template: `
  <mat-card>
    <h3 matSubheader>Selecciona un pokemon</h3>
    <mat-list (scroll)="scrollList($event.srcElement)">
      <mat-list-item *ngFor="let pokemon of pokemonList; let i = index" matRipple (click)="openPokemon(i + 1)">
        <h4 matLine>#{{ i + 1 }}</h4>
        <mat-hint matLine>{{ pokemon.name | titlecase }}</mat-hint>
        <mat-icon>keyboard_arrow_right</mat-icon>
      </mat-list-item>
    </mat-list>
  </mat-card>
  `,
  styles: [`
    mat-card {
      width: calc(100% - 32px);
    }
    mat-list {
      height: calc(100vh - 300px);
      overflow: auto;
      padding: 0;
      scroll-snap-type: y mandatory;
      scroll-snap-points-y: repeat(72px);
    }
    mat-list-item {
      scroll-snap-align: start;

    }
  `]
})
export class PokemonListComponent {
  @Input()pokemonList: any;
  pokemonTop: number;
  
  constructor(
    private detail: DetailPokemonService,
    private pokeApi: PokeAPIService) {
      this.pokemonTop = 1;
    }
  
  public openPokemon(pokemonIndex: number): void {
    this.detail.openPokemonDetail(pokemonIndex);
  }
  
  @HostListener('scroll', ['$event'])
  public scrollList($event: any): void {
    const { scrollTop, scrollHeight } = $event;
    const max: number = (scrollHeight) / 72;
    const top: number = Math.ceil(scrollTop / 72);
    if ( this.pokemonTop !== top && top > (max - 10)) {
      if (max < 721) this.pokeApi.loadPokemon(max + 50);
      this.pokemonTop = top;
    }
  }
}
