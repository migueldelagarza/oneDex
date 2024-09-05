import { Component, inject, Input } from '@angular/core';
import { PokeAPIService } from '@services/poke-api.service';
import { map } from 'rxjs';

@Component({
  selector: 'one-movements',
  template: `
    <div *ngIf="moveList$ | async as moveList">
      <mat-card *ngFor="let move of moveList">
        <mat-card-header>
          <mat-card-subtitle>{{move.type}}</mat-card-subtitle>
          <mat-card-title>
            {{move.spanishName}}
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-list>
            <mat-list-item>
              <mat-hint matLine>Potencia</mat-hint>
              <h4 matLine>{{move.power || 0}}</h4>
            </mat-list-item>
            <mat-list-item>
              <mat-hint mat-line>PP</mat-hint>
              <h4 mat-line>{{move.pp}}</h4>
            </mat-list-item>
          </mat-list>
          <mat-hint class="description">
            {{move.description}}
          </mat-hint>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./movements.component.sass']
})
export class MovementsComponent {
  @Input() moves: {name: string}[];

  private _movesService = inject(PokeAPIService);

  get moveList$() {
    return this._movesService.moveList$.pipe(
      map(moveList => {
        return moveList.filter(move =>
          this.moves.some(moveFromList => moveFromList.name === move.name)
        );
      })
    );
  }
}
