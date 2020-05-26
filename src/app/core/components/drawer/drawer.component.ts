import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'one-drawer',
  template: `
    <mat-toolbar>
      <button mat-button (click)="drawer.close()">
        <mat-icon>keyboard_arrow_left</mat-icon>
        <span class="mat-small">CERRAR</span>
      </button>
    </mat-toolbar>
  `,
  styles: [`
  `]
})
export class DrawerComponent {
  @Input()drawer: MatDrawer;
}
