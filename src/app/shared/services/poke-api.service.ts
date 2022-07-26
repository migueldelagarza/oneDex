import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UrlApi } from '@constants/urls';
import { map, tap } from 'rxjs/operators';

interface PokemonReference {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  private pokemons$: Subject<PokemonReference[]>;

  constructor(private http: HttpClient) {
    this.pokemons$ = new Subject();
  }

  get pokemons(): Observable<PokemonReference[]> {
    return this.pokemons$.asObservable();
  }

  loadPokemon(indexMax: number): Promise<any> {
    indexMax = indexMax < 899 ? indexMax : 898;
    return this.http.get<PokemonReference[]>(UrlApi.API_URL + 'pokemon?limit=' + indexMax)
      .pipe(tap(response => this.pokemons$.next(response))).toPromise();
  }

  public getPokemonByIndex(index: number | string): Observable<any> {
    return this.http.get<any>(UrlApi.API_URL + 'pokemon/' + index)
  }

  public getSpecieByIndex(index: number | string): Observable<any> {
    return this.http.get<any>(UrlApi.API_URL + 'pokemon-species/' + index)
  }
}
