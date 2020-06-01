import { Component } from '@angular/core';
import { SearchPokemonService } from '../../services/search-pokemon.service';

@Component({
  selector: 'one-footer',
  template: `
    <mat-toolbar>
      <button mat-button (click)="openSearch()">
        <mat-icon>search</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      background: #263238;
      color: #eee;
      bottom: 0;
      justify-content: space-around;
      position: fixed;
    }
  `]
})
export class FooterComponent {

  constructor(private search: SearchPokemonService) { }

  public openSearch(): void {
    this.search.openSearch();
  }

}
