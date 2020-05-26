import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokeAPIService } from '../../services/poke-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'one-pokemon-view',
  template: `
  <section *ngIf="pokemon$ | async as pokemon">
    <h2 mat-dialog-title>
      #{{pokemon.id}} {{pokemon.name | uppercase}}
    </h2>
    <mat-divider></mat-divider>
    <mat-dialog-content *ngIf="specie$ | async as specie">
      <div class="align-items-center">
        <div>
          <img [src]="pokemon.sprites.front_default">
        </div>
        <mat-list>
          <mat-list-item>
            <h4 matLine>Peso: {{pokemon.weight / 10}}kg</h4>
          </mat-list-item>
          <mat-list-item>
            <h4 matLine>Altura: {{pokemon.height / 10}}m</h4>
          </mat-list-item>
        </mat-list>
      </div>
      <mat-hint>{{specie.genera[4].genus}}</mat-hint>
      <mat-divider></mat-divider>
      <p>
        {{ specie.flavor_text_entries[3].flavor_text}}
      </p>
      <mat-hint>Estadísticas base</mat-hint>
      <mat-divider></mat-divider>
      <one-stats [stats]="pokemon.stats"></one-stats>
    </mat-dialog-content>
    <mat-dialog-actions align="center">
      <button mat-button mat-dialog-close>Volver</button>
    </mat-dialog-actions>
  </section>`,
  styles: [`
    img { filter: drop-shadow(4px 1px 1px #ccc) }
  `]
})
export class PokemonViewComponent implements OnInit {
  title: string;
  pokemon$: Observable<any>;
  specie$: Observable<any>;

  constructor(
    public dialogRef: MatDialogRef<PokemonViewComponent>,
    @Inject(MAT_DIALOG_DATA) public pokemonIndex: number,
    private pokeAPI: PokeAPIService
  ) {
    this.title = 'Detalle de pokemon'
    this.pokemon$ = pokeAPI.getPokemonByIndex(pokemonIndex);
    this.specie$ = pokeAPI.getSpecieByIndex(pokemonIndex);
  }

  ngOnInit(): void {
  }

}
