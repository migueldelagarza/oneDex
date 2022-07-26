import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'one-header',
  template: `
    <mat-toolbar>
      <span>
        {{ title }}
      </span>
      <button mat-icon-button class="mat-elevation-z0">
        <mat-icon>more_vert</mat-icon>
        <span class="mat-small"></span>
      </button>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      background: transparent
    }
  `]
})
export class HeaderComponent {
  @Input() drawer: MatDrawer;
  title: string;

  constructor() {
    this.title = '1Dx';
  }

}
