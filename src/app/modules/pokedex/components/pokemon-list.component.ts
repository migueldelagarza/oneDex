import { Component, Input, HostListener, OnInit } from '@angular/core';
import { DetailPokemonService } from '@services/detail-pokemon.service';
import { PokeAPIService } from '@services/poke-api.service';

@Component({
  selector: 'one-pokemon-list',
  template: `
  <mat-card>
    <h3 matSubheader>Selecciona un pokemon</h3>
    <mat-list (scroll)="scrollList($event.srcElement)">
      <mat-list-item *ngFor="let pokemon of pokemonList" matRipple (click)="openPokemon(pokemon.id)">
        <img mat-list-icon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{pokemon.id}}.png" [alt]="pokemon.name">
        <h4 matLine>#{{pokemon.id}}</h4>
        <mat-hint matLine>{{ pokemon.name | uppercase }}</mat-hint>
        <mat-divider mat-line></mat-divider>
        <span mat-line></span>
        <mat-icon>keyboard_arrow_right</mat-icon>
      </mat-list-item>
    </mat-list>
  </mat-card>
  `,
  styles: [`
    mat-card {
      margin: auto;
      max-width: 500px;
      width: calc(100% - 32px);
    }
    h3 {
      margin: 0;
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
      background: #7986cb;
      box-shadow: 0 2px 3px 1px rgba(0,0,0,0.3);
      border: solid 1px #eee;
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
      this.pokeApi.loadPokemon(this.lastPokemon + 50).then(() => {
        this.lastPokemon += 50;
      })
    }
  }
}
