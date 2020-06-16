import { Component } from '@angular/core';
import { RecentsService } from '@services/recents.service';
import { Observable } from 'rxjs';
import { PageData } from '@constants/pages';
import { PageContent } from '@models/page';

@Component({
  selector: 'one-recent-list',
  template: `
    <section align="center">
      <mat-hint>{{page.subtitle}}</mat-hint>
      <h1 class="mat-h1 text-primary">{{page.title}}</h1>
      
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
    this.pokemons = recents.recents;
    console.log(recents.recents)
  }
}
