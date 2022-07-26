import { Component, Input, HostListener, OnInit } from '@angular/core';
import { DetailPokemonService } from '@services/detail-pokemon.service';
import { PokeAPIService } from '@services/poke-api.service';

@Component({
  selector: 'one-pokemon-list',
  template: `
  <mat-card>
    <h3 matSubheader>Selecciona un pokemon</h3>
    <mat-list (scroll)="scrollList($event.srcElement)">
      <mat-list-item *ngFor="let pokemon of pokemonList; let idx = index" matRipple (click)="openPokemon(idx + 1)">
        <img mat-list-icon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{idx + 1}}.png" [alt]="pokemon.name">
        <h4 matLine>#{{idx + 1}}</h4>
        <mat-hint matLine>{{ pokemon.name | titlecase }}</mat-hint>
        <mat-icon>keyboard_arrow_right</mat-icon>
        <mat-divider mat-line></mat-divider>
      </mat-list-item>
    </mat-list>
  </mat-card>
  `,
  styles: [`
    mat-card {
      width: calc(100% - 32px);
    }
    mat-list {
      height: calc(100vh - 316px);
      overflow: auto;
      padding: 0;
      scroll-snap-type: y mandatory;
      scroll-snap-points-y: repeat(72px);
    }
    mat-list-item {
      scroll-snap-align: start;
    }
    .mat-list-icon {
      height: 96px !important;
      width: 96px !important;
    }
  `]
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList: any[];
  lastPokemon: number;

  constructor(
    private detail: DetailPokemonService,
    private pokeApi: PokeAPIService) {
    this.lastPokemon = 50;
  }

  ngOnInit(): void {
  }


  public openPokemon(pokemonIndex: number): void {
    this.detail.openPokemonDetail(pokemonIndex);
  }

  @HostListener('scroll', ['$event'])
  public scrollList($event: any): void {
    const { scrollTop, scrollHeight, offsetHeight } = $event;
    if (Math.ceil(offsetHeight + scrollTop) == scrollHeight) {
      this.pokeApi.loadPokemon(this.lastPokemon + 50).then( () => {
        this.lastPokemon += 50;
      })
    }
  }
}
