import { Component, inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { DetailPokemonService } from "@services/detail-pokemon.service";

@Component({
  selector: "one-search",
  template: `
    <div id="searchBox">
      <input
        #SearchInput
        id="searchInput"
        type="search"
        placeholder="Buscar por nombre o #"
        [formControl]="pokemonControl"
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
  pokemonControl = new FormControl('', Validators.required);
  private _detail = inject(DetailPokemonService);

  public search(): void {
    if (this.pokemonControl.invalid) return;
    this._detail.openPokemonDetail(this.pokemonControl.value.trim());
  }
}
