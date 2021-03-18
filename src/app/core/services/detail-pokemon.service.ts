import { Injectable } from '@angular/core';
import { PokemonViewComponent } from 'src/app/shared/components/pokemon-view/pokemon-view.component';
import { PokeAPIService } from '@services/poke-api.service';
import { Observable } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Injectable({
  providedIn: 'root'
})
export class DetailPokemonService {

  constructor(
    private sheet: MatBottomSheet,
    private pokeAPI: PokeAPIService
  ) { }

  public openPokemonDetail(index: number): void {
    index = index < 1 ? 1 : index;
    index = index > 721 ? 721 : index;
    this.getDataPokemon(index).subscribe( pokemon => {
      this.getDataSpecie(index).subscribe( specie => {
        this.sheet.open(PokemonViewComponent, {
          data: { pokemon, specie }
        })
      });
    });
  }

  private getDataPokemon(index: number): Observable<any> {
    return this.pokeAPI.getPokemonByIndex(index);
  }

  private getDataSpecie(index: number): Observable<any> {
    return this.pokeAPI.getSpecieByIndex(index);
  }
}
