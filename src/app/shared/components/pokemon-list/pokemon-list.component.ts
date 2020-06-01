import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonViewComponent } from '../pokemon-view/pokemon-view.component';

@Component({
  selector: 'one-pokemon-list',
  template: `
    <mat-list (scroll)="scrollList($event)">
      <h3 matSubheader>Selecciona un pokemon</h3>
      <mat-list-item *ngFor="let pokemon of pokemonList; let i = index" matRipple (click)="openPokemon(i + 1)">
        <h4 matLine>#{{ i + 1 }}</h4>
        <mat-hint matLine>{{ pokemon.name | titlecase }}</mat-hint>
        <mat-icon>keyboard_arrow_right</mat-icon>
      </mat-list-item>
    </mat-list>
  `,
  styles: [`
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

  public scrollList(event: any): void {
    console.log(event)
  }

}
