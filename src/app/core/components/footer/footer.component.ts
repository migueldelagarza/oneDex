import { Component } from '@angular/core';
import { SearchPokemonService } from '../../services/search-pokemon.service';

interface Link {
  name: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'one-footer',
  template: `
    <mat-toolbar>
      <a mat-button *ngFor="let link of links" [routerLink]="link.route">
        <mat-icon>{{link.icon}}</mat-icon>
        <small>{{link.name}}</small>
      </a>
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
  links: Link[];

  constructor(private search: SearchPokemonService) {
    this.links = [
      { name: 'BUSCAR', icon: 'search', route: 'buscar' },
      { name: 'FAVORITOS', icon: 'favorite_border', route: 'favoritos' },
      { name: 'LISTA', icon: 'list', route: '/pokedex' },
    ]
  }

  public openSearch(): void {
    this.search.openSearch();
  }

}
