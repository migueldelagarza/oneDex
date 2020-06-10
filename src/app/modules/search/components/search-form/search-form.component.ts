import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'one-search-form',
  template: `
    <section>
      <div align="center">
        <mat-hint>{{subtitle}}</mat-hint>
        <h1 class="mat-h1 text-primary">{{title}}</h1>
      </div>
      <one-keyboard></one-keyboard>
    </section>
  `,
  styles: [`
    section {
      justify-content: center;
      display: flex;
      flex-direction: column;
      height: calc(100vh - 64px);
    }
  `]
})
export class SearchFormComponent implements OnInit {
  title: string;
  subtitle: string;

  constructor() {
    this.title = 'Pokedex nacional';
    this.subtitle = 'Búsqueda por número'
  }

  ngOnInit(): void {
  }

}
