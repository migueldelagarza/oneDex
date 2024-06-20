import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { UrlApi } from '@constants/urls';
import { map } from 'rxjs/operators';

interface PokemonReference {
  name: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class PokeAPIService {
  private _http = inject(HttpClient);
  private _pokemonList$ = new BehaviorSubject<PokemonReference[]>([]);
  private _offsetPokemon = 0;

  pokemonList = this._pokemonList$.asObservable();

  loadPokemon(indexMax: number): void {
    indexMax = indexMax < 899 ? indexMax : 898;
    firstValueFrom(this._http.get<PokemonReference[]>(UrlApi.API_URL + 'pokemon?limit=' + indexMax + '&offset=' + this._offsetPokemon)
      .pipe(map((response: any) => {
        return response.results
      }))).then(pokemon => {
        const currentValue = this._pokemonList$.value;
        this._pokemonList$.next([...currentValue, ...pokemon]);
        this._offsetPokemon = this._pokemonList$.value.length;
      })
  }

  public getPokemonByIndex(index: string): Observable<any> {
    return this._http.get<any>(UrlApi.API_URL + 'pokemon/' + index)
  }

  public getSpecieByIndex(index: string): Observable<any> {
    const indexNumber = parseInt(index);
    return this._http.get<any>(UrlApi.API_URL + 'pokemon-species/' + indexNumber)
  }
}
