import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RecentsService {
  recents: any[];

  constructor() {
    const localData = JSON.parse(localStorage.getItem("recents"));
    this.recents = localData || [];
  }

  public addRecentPokemon(pokemon: any, specie: any) {
    console.log(pokemon);
    const index = this.recents.findIndex((data) => {
      return data.pokemon.id === pokemon.id;
    });
    if (index >= 0) {
      this.recents.splice(index, 1);
    }
    this.recents.unshift({ pokemon, specie });
    this.saveLocal();
  }

  private saveLocal(): void {
    const pokemon = JSON.stringify(this.recents);
    localStorage.setItem("recents", pokemon);
  }
}
