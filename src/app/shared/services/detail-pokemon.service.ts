import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PokeAPIService } from '@services/poke-api.service';
import { Observable } from 'rxjs';
import { PokemonViewComponent } from 'src/app/modules/pokedex/components/pokemon-view.component';

@Injectable({
  providedIn: 'root'
})
export class DetailPokemonService {

  constructor(
    private dialog: MatBottomSheet,
    private pokeAPI: PokeAPIService
  ) { }

  public openPokemonDetail(index: number | string): void {
    index = index < 1 ? 1 : index;
    index = index > 898 ? 898 : index;
    this.getDataPokemon(index).subscribe(pokemon => {
      this.getDataSpecie(index).subscribe(specie => {
        this.dialog.open(PokemonViewComponent, {
          data: { pokemon, specie }
        })
      });
    });
  }

  private getDataPokemon(index: number | string): Observable<any> {
    return this.pokeAPI.getPokemonByIndex(index);
  }

  private getDataSpecie(index: number | string): Observable<any> {
    return this.pokeAPI.getSpecieByIndex(index);
  }
}
