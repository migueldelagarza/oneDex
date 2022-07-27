import { Component } from '@angular/core';
import { DetailPokemonService } from '@services/detail-pokemon.service';

@Component({
  selector: 'one-keyboard',
  template: `
    <div align="center">
      <p class="mat-display-2" align="center">#{{pokemonId}}</p>
      <div class="keyboard">
        <button type="button" mat-stroked-button class="mat-elevation-z1" *ngFor="let key of keys" (click)="addDigit(key)">
          {{key}}
        </button>
        <button type="button" mat-button color="warn" class="mat-elevation-z1" (click)="resetId()">
          <small class="mat-small">
            BORRAR
          </small>
        </button>
        <button mat-stroked-button class="mat-elevation-z1" (click)="addDigit(0)">0</button>
        <button mat-button  class="mat-elevation-z1" (click)="eraseLast(pokemonId)">
          <mat-icon>backspace</mat-icon>
        </button>
      </div>
      <div *ngIf="isValidDigit" id="searchButton">
        <button type="button" class="mat-elevation-z0" mat-fab color="accent" (click)="searchPokemon()">
          <mat-icon>search</mat-icon>
        </button>
        <small class="mat-small">buscar</small>
      </div>
    </div>
  `,
  styles: [`
    .mat-display-2 {
      padding-top: 16px;
      margin-bottom: 32px;
    }
    .keyboard {
      display: flex;
      flex-wrap: wrap;
      height: 275px;
      justify-content: space-between;
      margin: auto;
      max-width: 300px;
    }
    .keyboard button {
      font-size: 20px;
      height: 25%;
      width: 30%;
    }
    #searchButton {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 16px;
    }
  `]
})
export class KeyboardComponent {
  pokemonId: string;
  keys: number[];

  constructor(private detail: DetailPokemonService) {
    this.pokemonId = '0';
    this.keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  get isValidDigit(): boolean {
    return parseInt(this.pokemonId) > 0;
  }

  public addDigit(digit: number): void {
    if (this.pokemonId === '0') {
      this.pokemonId = digit.toString();
    } else {
      this.pokemonId += digit;
    }
    if (parseInt(this.pokemonId) > 898) {
      this.resetId();
    }
  }

  public eraseLast(id: string): void {
    this.pokemonId = id.slice(0, -1);
  }

  public resetId(): void {
    this.pokemonId = '0';
  }

  public searchPokemon(): void {
    const index = parseInt(this.pokemonId);
    this.detail.openPokemonDetail(index);
  }
}
