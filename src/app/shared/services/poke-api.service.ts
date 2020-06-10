import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

interface PokemonReference {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {
  url: string;
  specieUrl: string;
  private pokemons$: Subject<PokemonReference[]>;

  constructor(private http: HttpClient) {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
    this.specieUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
    this.pokemons$ = new Subject();
  }

  get pokemons(): Observable<PokemonReference[]> {
    return this.pokemons$.asObservable();
  }

  loadPokemon(indexMax: number): void {
    indexMax = indexMax < 722 ? indexMax : 721;
    this.http.get<PokemonReference[]>(this.url + '?limit=' + indexMax)
    .subscribe( response => {
      this.pokemons$.next(response)
    });
  }

  public getPokemonByIndex(index: number): Observable<any> {
    return this.http.get<any>(this.url + index)
  }

  public getSpecieByIndex(index: number): Observable<any> {
    return this.http.get<any>(this.specieUrl + index)
  }
}
