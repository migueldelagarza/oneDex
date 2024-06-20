import { Component, Input, OnInit } from '@angular/core';
interface Move {
  name: string
  url: string
}

@Component({
  selector: 'one-movements',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let move of moves">
        <h4 matListItemTitle>{{move.name}}</h4>
      </mat-list-item>
    </mat-list>
  `,
  // styleUrls: ['./movements.component.sass']
})
export class MovementsComponent {
  @Input() moves: Move[]; 

  constructor() { }
}
