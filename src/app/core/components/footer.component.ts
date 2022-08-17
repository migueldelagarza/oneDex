import { Component } from "@angular/core";
import { PageData } from "@constants/pages";
import { PageContent } from "@models/page";

@Component({
  selector: "one-footer",
  template: `
    <footer
      mat-tab-nav-bar
      mat-align-tabs="center"
      backgroundColor="primary"
    >
      <a
        mat-tab-link
        *ngFor="let link of links"
        routerLinkActive
        #linkActive="routerLinkActive"
        [active]="linkActive.isActive"
        [routerLink]="link.route"
      >
        <mat-icon>{{ link.icon }}</mat-icon>
        <small>{{ link.name }}</small>
      </a>
    </footer>
  `,
  styles: [
    `
      footer {
      }
    `,
  ],
})
export class FooterComponent {
  links: PageContent[];

  constructor() {
    this.links = Object.values(PageData);
  }
}
