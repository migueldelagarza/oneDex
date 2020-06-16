import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecentsService {
  recents: any[];

  constructor() {
    this.recents = [];
  }

  public addRecentPokemon( pokemon: any, specie: any ) {
    this.recents.push({pokemon, specie});
  }
}
