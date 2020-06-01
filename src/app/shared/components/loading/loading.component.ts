import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'one-loading',
  template: `
    <div matDialogTitle>
      <mat-spinner [diameter]="diameter" color="accent"></mat-spinner>
      <mat-hint> Cargando...</mat-hint>
    </div>
  `,
  styles: [`
    div {
      align-items: center;
      display: flex;
    }
  `]
})
export class LoadingComponent {
  diameter: number;

  constructor(private dialogRef: MatDialogRef<any>) {
    this.diameter = 24;
  }
}
