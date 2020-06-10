import { Component, OnInit } from '@angular/core';

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
    this.title = 'Favoritos';
    this.subtitle = 'Tu lista personalizada';
  }

  ngOnInit(): void {
  }

}
