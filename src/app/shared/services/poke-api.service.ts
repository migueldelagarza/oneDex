import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private pokemons$: Observable<PokemonReference[]>;

  constructor(private http: HttpClient) {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
    this.specieUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
    this.pokemons$ = http.get<PokemonReference[]>(this.url + '?limit=25');
  }

  get pokemons(): Observable<PokemonReference[]> {
    return this.pokemons$;
  }

  public getPokemonByIndex(index: number): Observable<any> {
    return this.http.get<any>(this.url + index)
  }

  public getSpecieByIndex(index: number): Observable<any> {
    return this.http.get<any>(this.specieUrl + index)
  }
}
