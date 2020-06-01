import { Component, OnInit } from '@angular/core';
import { DetailPokemonService } from '../../services/detail-pokemon.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'one-search-pokemon',
  template: `
    <mat-form-field color="accent">
      <mat-label>Por número</mat-label>
      <input matInput type="number" min="1" max="271" [formControl]="index" required>
      <span matPrefix>#</span>
    </mat-form-field>
    <button mat-button color="primary" (click)="openDetail()">Ver pokemon</button>
  `,
  styles: [
  ]
})
export class SearchPokemonComponent {
  index: FormControl;

  constructor(private detailPokemon: DetailPokemonService) {
    const { nullValidator, min } = Validators;
    this.index = new FormControl('1', nullValidator);
  }

  public openDetail(): void {
    this.detailPokemon.openPokemonDetail(this.index.value);
  }

}
