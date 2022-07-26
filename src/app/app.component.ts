import { Component } from '@angular/core';
import { DetailPokemonService } from '@services/detail-pokemon.service';

@Component({
  selector: 'one-root',
  template: '<one-shell></one-shell>'
})
export class AppComponent {

  constructor(private detailPokemon_: DetailPokemonService){
  }
}
