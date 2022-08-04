import { Component, Input } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { DetailPokemonService } from "@services/detail-pokemon.service";
import { LoadingService } from "../services/loading.service";

@Component({
  selector: "one-header",
  template: `
    <mat-toolbar>
      <span>
        {{ title }}
      </span>
      <one-search></one-search>
    </mat-toolbar>
    <mat-progress-bar
      class="mat-elevation-z1"
      color="accent"
      [mode]="progressStatus"
      value="100"
    ></mat-progress-bar>
  `,
  styles: [
    `
      mat-toolbar {
        background: transparent;
      }
    `,
  ],
})
export class HeaderComponent {
  @Input() drawer: MatDrawer;
  title: string;

  constructor(
    private Loading_: LoadingService,
    public detailService: DetailPokemonService
  ) {
    this.title = "OneDex";
  }

  get progressStatus(): string {
    return this.Loading_.isLoading ? "indeterminate" : "determinate";
  }
}
