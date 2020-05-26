import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonViewComponent } from '../pokemon-view/pokemon-view.component';

@Component({
  selector: 'one-pokemon-list',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let pokemon of pokemonList; let i = index" matRipple (click)="openPokemon(i + 1)">
        <h4 matLine>#{{ i + 1 }}</h4>
        <p matLine>{{ pokemon.name | uppercase }}</p>
        <mat-icon>keyboard_arrow_right</mat-icon>
        <mat-divider></mat-divider>
      </mat-list-item>
    </mat-list>
  `,
  styles: [`
    mat-list {
      max-height: calc(100% - 156px);
      overflow: auto;
      width: calc(100% - 16px);
    }
  `]
})
export class PokemonListComponent {
  @Input()pokemonList: any;

  constructor(private dialog: MatDialog) { }

  public openPokemon(pokemonIndex: number): void {
    this.dialog.open(PokemonViewComponent, {
      height: '100vh',
      maxHeight: 'none',
      maxWidth: 'none',
      width: '100vw',
      data: pokemonIndex
    })
  }

}
