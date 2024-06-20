import { Component, Inject } from "@angular/core";
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from "@angular/material/bottom-sheet";
import { RecentsService } from "@services/recents.service";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";

@Component({
  selector: "one-pokemon-view",
  templateUrl: './pokemon-view.component.html',
  styles: [
    `
      .mat-dialog-title {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0;
      }
      mat-dialog-content {
        height: calc(100% - 300px);
      }
      img {
        filter: drop-shadow(4px 1px 1px #ccc);
      }
      .pokemon {
        justify-content: center;
      }
    `,
  ],
})
export class PokemonViewComponent {
  title: string;
  pokemon: any;
  specie: any;
  moves: any;

  constructor(
    public sheetRef: MatBottomSheetRef<PokemonViewComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public pokemonData: any,
    private service: RecentsService
  ) {
    this.title = "Detalle de pokemon";
    const { pokemon, specie } = pokemonData;
    pokemon.imageUrl = this._getImageUrl(pokemon.id);
    pokemon.id = this._getIdString(pokemon.id);
    this.pokemon = pokemon;
    this.specie = specie;
    this.moves = pokemon.moves.map(({move}) => move)
    firstValueFrom(sheetRef.afterDismissed()).then(() => {
      this.service.addRecentPokemon(pokemon, specie);
    });
  }

  public dismiss(): void {
    this.sheetRef.dismiss();
  }

  private _getImageUrl(index: number): string {
    const idxString = this._getIdString(index);
    return environment.urlImages + idxString + '.png'
  }

  private _getIdString(index: number): string {
    let idxString = index.toString()
    while (idxString.length < 3) idxString = '0' + idxString;
    return idxString;
  }
}
