import { Component, inject } from '@angular/core';
import { PokeAPIService } from '@services/poke-api.service';

@Component({
  selector: 'one-root',
  template: '<one-shell></one-shell>'
})
export class AppComponent {
  private _pokeApi = inject(PokeAPIService);

  constructor() {
    this._pokeApi.loadPokemon(151);
    this._pokeApi.loadMoves();
  }

  async showNotification() {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      new Notification('Listo!')
    }
  }
}
