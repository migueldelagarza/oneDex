import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'one-header',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="drawer.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      {{ title }}
    </mat-toolbar>
  `,
  styles: [``]
})
export class HeaderComponent {
  @Input() drawer: MatDrawer;
  title: string;

  constructor() {
    this.title = 'OneDex';
  }

}
