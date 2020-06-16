import { Component } from '@angular/core';
import { PageData } from '@constants/pages';
import { PageContent } from '@models/page';

@Component({
  selector: 'one-search-form',
  template: `
    <section>
      <div align="center">
        <mat-hint>{{page.subtitle}}</mat-hint>
        <h1 class="mat-h1 text-primary">{{page.title}}</h1>
      </div>
      <one-keyboard></one-keyboard>
    </section>
  `,
  styles: [`
    section {
      justify-content: center;
      display: flex;
      flex-direction: column;
      height: calc(100vh - 128px);
    }
  `]
})
export class SearchFormComponent {
  page: PageContent = PageData.SEARCH_PAGE;
}
