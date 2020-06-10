import { Component, OnInit } from '@angular/core';
import { SearchPokemonService } from 'src/app/core/services/search-pokemon.service';
import { DetailPokemonService } from 'src/app/core/services/detail-pokemon.service';

@Component({
  selector: 'one-keyboard',
  template: `
    <section align="center">
      <p class="mat-display-1" align="center">#{{pokemonId}}</p>
      <mat-divider></mat-divider>
      <div class="keyboard">
        <button type="button" mat-button *ngFor="let key of keys" (click)="addDigit(key)">
          {{key}}
        </button>
      </div>
      <mat-divider></mat-divider>
      <button type="button" mat-button (click)="resetId()">
        BORRAR
      </button>
      |
      <button type="button" mat-button color="accent" (click)="searchPokemon()">
        BUSCAR
      </button>
    </section>
  `,
  styles: [`
    .keyboard {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: auto;
      max-width: 300px;
    }
    .keyboard button {
      font-size: 24px;
      width: 33.33%;
    }
  `]
})
export class KeyboardComponent {
  pokemonId: string;
  keys: number[];

  constructor(private detail: DetailPokemonService) {
    this.pokemonId = '0';
    this.keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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

  public resetId(): void {
    this.pokemonId = '0';
  }

  public searchPokemon(): void {
    const index = parseInt(this.pokemonId);
    this.detail.openPokemonDetail(index);
  }
}
