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
    const index = this.recents.findIndex( data => {
      return data.pokemon.id === pokemon.id;
    });
    console.log(index)
    if (index >= 0) {
      this.recents.splice(index, 1);
    }
    this.recents.unshift({pokemon, specie});
  }
}
