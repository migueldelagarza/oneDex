import { Component, inject, Input } from '@angular/core';
import { PokeAPIService } from '@services/poke-api.service';
interface Move {
  name: string
  url: string
}

@Component({
  selector: 'one-movements',
  template: `
    <mat-list>
      <h3 matSubheader>Movimientos</h3>
      <mat-list-item *ngFor="let move of moves">
        <h4 matListItemTitle>{{move.spainName}}</h4>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./movements.component.sass']
})
export class MovementsComponent {
  @Input() moves: Move[]; 

  private _movesService = inject(PokeAPIService);

  constructor() {
    this._movesService.moveList$.subscribe( result => console.log(result))
  }
}
