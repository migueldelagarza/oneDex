import { Component } from "@angular/core";

@Component({
  selector: "one-shell",
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="over" #drawer>
        <one-drawer [drawer]="drawer"></one-drawer>
      </mat-sidenav>
      <mat-sidenav-content>
        <one-header [drawer]="drawer"></one-header>
        <router-outlet></router-outlet>
        <one-footer></one-footer>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      mat-sidenav-container {
        height: 100vh;
      }
    `,
  ],
})
export class ShellComponent {}
