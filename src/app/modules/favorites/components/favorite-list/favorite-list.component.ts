import { Component, OnInit } from '@angular/core';
import { PageData } from '@constants/pages';

@Component({
  selector: 'one-favorite-list',
  template: `
    <div align="center">
      <mat-hint>{{subtitle}}</mat-hint>
      <h1 class="mat-h1 text-primary">{{title}}</h1>
      <em mat-subheader>Próximamente</em>
    </div>
  `,
  styles: [
  ]
})
export class FavoriteListComponent implements OnInit {
  title: string;
  subtitle: string;

  constructor() {
    const { title, subtitle } = PageData.FAVORITES_PAGE;
    this.title = title;
    this.subtitle = subtitle;
  }

  ngOnInit(): void {
  }

}
