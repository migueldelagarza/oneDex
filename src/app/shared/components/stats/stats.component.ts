import { Component, OnInit, Input } from '@angular/core';

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

@Component({
  selector: 'one-stats',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let stat of stats">
        <h4 matLine>{{ stat.stat.name | titlecase}}</h4>
        <p matLine>{{ stat.base_stat }}
        <div class="bar" [style.width.px]="stat.base_stat * 2" [style.background]="color"></div>
      </mat-list-item>
    </mat-list>
  `,
  styles: [`
    .bar {
      border-radius: 3px;
      height: 8px;
      border: solid 1px #333;
    }
  `]
})
export class StatsComponent implements OnInit {
  @Input() stats: Stat[];
  @Input() color: string;

  constructor() {
  }
  
  ngOnInit(): void {
    this.stats[0].stat.name = 'velocidad';
    this.stats[1].stat.name = 'defensa especial';
    this.stats[2].stat.name = 'ataque especial';
    this.stats[3].stat.name = 'defensa';
    this.stats[4].stat.name = 'ataque';
    this.stats[5].stat.name = 'vida';
  }

}
