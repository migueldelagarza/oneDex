import { Component } from '@angular/core';
import { RecentsService } from '@services/recents.service';
import { PageData } from '@constants/pages';
import { PageContent } from '@models/page';

@Component({
  selector: 'one-recent-list',
  template: `
    <section align="center">
      <h1 class="mat-h1 text-primary">{{page.title}}</h1>
      <one-pokemon-list [pokemonList]="pokemons"></one-pokemon-list>
    <section>
  `,
  styles: [
  ]
})
export class RecentListComponent {
  page: PageContent;
  pokemons: any[];

  constructor(private recents: RecentsService) {
    this.page = PageData.RECENTS_PAGE;
    this.pokemons = recents.recents.map( data => {
      return {
        id: data.pokemon.id,
        name: data.pokemon.name
      }
    });
  }
}
