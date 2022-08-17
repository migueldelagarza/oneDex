import { Component, Input } from "@angular/core";
import { DetailPokemonService } from "@services/detail-pokemon.service";

@Component({
  selector: "one-search",
  template: `
    <div id="searchBox">
      <input
        #SearchInput
        id="searchInput"
        type="search"
        placeholder="Buscar"
        [value]="pokemonName"
        (change)="updateName(SearchInput.value)"
        (keyup.enter)="search()"
      />
      <mat-icon (click)="search()">search</mat-icon>
    </div>
  `,
  styles: [
    `
      #searchBox {
        align-items: center;
        border-radius: 24px;
        background: rgba(0, 0, 0, 0.05);
        display: flex;
        overflow: hidden;
        width: calc(100vw - 32px);
      }
      #searchInput {
        background: none;
        border: none;
        padding: 8px 24px;
        font-size: 16px;
        width: calc(100% - 30px);
      }
      #searchInput:focus {
        outline: none;
      }
    `,
  ],
})
export class SearchComponent {
  private pokemonName$: string;

  constructor(private pokemon_: DetailPokemonService) {
    this.pokemonName$ = "";
  }

  get pokemonName(): string {
    return this.pokemonName$;
  }

  set pokemonName(name: string) {
    name.replace(" ", "");
    if (name !== "") {
      this.pokemonName$ = name;
    }
  }

  public updateName(name: string): void {
    this.pokemonName = name;
  }

  public search(): void {
    this.pokemon_.openPokemonDetail(this.pokemonName);
  }
}
