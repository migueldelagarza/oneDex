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
    <footer mat-tab-nav-bar mat-align-tabs="center" headerPosition="below">
      <a mat-tab-link *ngFor="let link of links" [routerLink]="link.route"
        routerLinkActive #linkActive="routerLinkActive"
        [active]="linkActive.isActive">
        <mat-icon>{{link.icon}}</mat-icon>
        <small>{{link.name}}</small>
      </a>
    </footer>
  `,
  styles: [`
    footer {
      bottom: 0;
      position: fixed;
      width: 100%;
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
