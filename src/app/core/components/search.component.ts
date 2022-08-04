import { Component } from "@angular/core";
import { DetailPokemonService } from "@services/detail-pokemon.service";

@Component({
  selector: "one-search",
  template: `
    <mat-form-field appearance="outline">
      <input
        #SearchInput
        matInput
        type="search"
        placeholder="Buscar"
        [value]="pokemonName"
        (change)="updateName(SearchInput.value)"
        (keyup.enter)="search()"
      />
      <button mat-icon-button matSuffix (click)="search()">
        <mat-icon>search</mat-icon>
      </button>
    </mat-form-field>
  `,
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
