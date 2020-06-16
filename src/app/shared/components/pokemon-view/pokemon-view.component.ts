import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecentsService } from '@services/recents.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'one-pokemon-view',
  template: `
    <h1 mat-dialog-title>
      <button mat-icon-button mat-dialog-close (click)="setRecentPokemon(pokemon, specie)">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      Detalle
      <button mat-icon-button>
        <mat-icon>favorite_border</mat-icon>
      </button>
    </h1>
    <mat-divider></mat-divider>
    <h2>
      #{{pokemon.id}} {{pokemon.name | uppercase}}
    </h2>
    <div class="align-items-center pokemon">
      <div>
        <img [src]="pokemon.sprites.front_default">
      </div>
      <mat-list>
        <mat-list-item>
          <h4 matLine>Peso:</h4>
          <mat-hint matLine>{{pokemon.weight / 10}}kg</mat-hint>
        </mat-list-item>
        <mat-list-item>
          <h4 matLine>Altura:</h4>
          <mat-hint matLine>{{pokemon.height / 10}}m</mat-hint>
        </mat-list-item>
      </mat-list>
    </div>
    <mat-dialog-content>
      <h2>{{ (specie.genera | translateEs)[0].genus }}</h2>
      <p>
        {{ (specie.flavor_text_entries | translateEs)[0].flavor_text }}
      </p>
      <one-stats [stats]="pokemon.stats" [color]="specie.color.name"></one-stats>
    </mat-dialog-content>
  `,
  styles: [`
    .mat-dialog-title { align-items: center; display: flex; justify-content: space-between; }
    img { filter: drop-shadow(4px 1px 1px #ccc) }
    .pokemon { justify-content: center }

  `]
})
export class PokemonViewComponent {
  title: string;
  pokemon: any;
  specie: any;

  constructor(
    public dialogRef: MatDialogRef<PokemonViewComponent>,
    @Inject(MAT_DIALOG_DATA) public pokemonData: any,
    private recents: RecentsService
  ) {
    this.title = 'Detalle de pokemon';
    const { pokemon, specie } = pokemonData;
    this.pokemon = pokemon;
    this.specie = specie;
  }
  
  public setRecentPokemon(pokemon: any, specie: any): void {
    this.recents.addRecentPokemon(pokemon, specie);
  }
}
