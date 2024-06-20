import { Injectable, inject } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { PokeAPIService } from "@services/poke-api.service";
import { Observable, firstValueFrom } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { PokemonViewComponent } from "src/app/modules/pokedex/components/pokemon-view/pokemon-view.component";

@Injectable({
  providedIn: "root",
})
export class DetailPokemonService {
  pokemon: any;
  private dialog = inject(MatBottomSheet);
  private pokeAPI = inject(PokeAPIService);

  public openPokemonDetail(index: string): void {
    firstValueFrom(this.getDataPokemon(index)
      .pipe(
        tap((pokemon) => (this.pokemon = pokemon)),
        switchMap((pokemon) => this.getDataSpecie(pokemon.id))
      ))
      .then((specie) => {
        this.openPokemonBottomsheet(this.pokemon, specie);
      });
  }

  private openPokemonBottomsheet(pokemon: any, specie: any): void {
    this.dialog.open(PokemonViewComponent, { data: { pokemon, specie } });
  }

  private getDataPokemon(index: string): Observable<any> {
    return this.pokeAPI.getPokemonByIndex(index);
  }

  private getDataSpecie(index: string): Observable<any> {
    return this.pokeAPI.getSpecieByIndex(index);
  }
}
