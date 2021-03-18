import { Component } from '@angular/core';
import { DetailPokemonService } from 'src/app/core/services/detail-pokemon.service';

@Component({
  selector: 'one-keyboard',
  template: `
    <div align="center">
      <p class="mat-display-2" align="center">#{{pokemonId}}</p>
      <div class="keyboard">
        <button type="button" mat-raised-button *ngFor="let key of keys" (click)="addDigit(key)">
          {{key}}
        </button>
        <button type="button" mat-raised-button (click)="resetId()">
          C
        </button>
        <button mat-stroked-button class="mat-elevation-z1" (click)="addDigit(0)">0</button>
        <button mat-button  class="mat-elevation-z1" (click)="eraseLast(pokemonId)">
          <mat-icon>backspace</mat-icon>
        </button>
      </div>
      <button type="button" mat-raised-button color="accent" (click)="searchPokemon()">
        VER DETALLE
      </button>
    </div>
  `,
  styles: [`
    .keyboard {
      display: flex;
      flex-wrap: wrap;
      height: 250px;
      justify-content: space-between;
      margin: auto;
      max-width: 300px;
    }
    .keyboard button {
      height: 20%;
      width: 30%
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

  public addDigit(digit: number): void {
    if (this.pokemonId === '0') {
      this.pokemonId = digit.toString();
    } else {
      this.pokemonId += digit;
    }
    if (parseInt(this.pokemonId) > 721) {
      this.resetId();
    }
  }

  public eraseLast(id: string): void {
    if (this.pokemonId !== '0') {
      this.pokemonId = id.slice(0, -1);
    }
  }

  public resetId(): void {
    this.pokemonId = '0';
  }

  public searchPokemon(): void {
    if (this.pokemonId && this.pokemonId !== '0') {
      const index = parseInt(this.pokemonId);
      this.detail.openPokemonDetail(index);
    }
  }
}
