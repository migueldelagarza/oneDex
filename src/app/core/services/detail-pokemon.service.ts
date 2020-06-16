import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonViewComponent } from 'src/app/shared/components/pokemon-view/pokemon-view.component';
import { PokeAPIService } from '@services/poke-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailPokemonService {

  constructor(
    private dialog: MatDialog,
    private pokeAPI: PokeAPIService
  ) { }

  public openPokemonDetail(index: number): void {
    index = index < 1 ? 1 : index;
    index = index > 721 ? 721 : index;
    this.getDataPokemon(index).subscribe( pokemon => {
      this.getDataSpecie(index).subscribe( specie => {
        this.dialog.open(PokemonViewComponent, {
          height: '100vh',
          maxHeight: 'none',
          maxWidth: 'none',
          width: '100vw',
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
