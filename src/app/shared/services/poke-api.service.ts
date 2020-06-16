import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UrlApi } from '@constants/urls';

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

  loadPokemon(indexMax: number): void {
    indexMax = indexMax < 722 ? indexMax : 721;
    this.http.get<PokemonReference[]>(UrlApi.API_URL + 'pokemon?limit=' + indexMax)
    .subscribe( response => {
      this.pokemons$.next(response)
    });
  }

  public getPokemonByIndex(index: number): Observable<any> {
    return this.http.get<any>(UrlApi.API_URL + 'pokemon/' + index)
  }

  public getSpecieByIndex(index: number): Observable<any> {
    return this.http.get<any>(UrlApi.API_URL + 'pokemon-species/' + index)
  }
}
