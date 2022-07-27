import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { LoadingService } from '../services/loading.service';

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
    <mat-progress-bar class="mat-elevation-z1" color="accent" [mode]="progressStatus" value="100"></mat-progress-bar>
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

  constructor(private Loading_: LoadingService) {
    this.title = 'OneDex';
  }

  get progressStatus(): string {
    return this.Loading_.isLoading ? 'indeterminate' : 'determinate'
  }

}
