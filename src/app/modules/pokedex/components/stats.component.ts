import { Component, OnInit, Input } from "@angular/core";
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from "chart.js";

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

@Component({
  selector: "one-stats",
  template: `
    <h2 class="mat-h2 text-accent">Estadísticas base</h2>
    <div style="display: block">
      <canvas
        baseChart
        [data]="chartData"
        [options]="{ responsive: true }"
        type="polarArea"
      >
      </canvas>
    </div>
  `,
  styles: [`
    canvas {
      padding: 0 32px
    }
  `],
})
export class StatsComponent implements OnInit {
  @Input() stats: Stat[];
  @Input() color: string;
  chartLabels: string[];
  chartData: any;

  constructor() {}

  ngOnInit(): void {
    this.chartLabels = [
      "velocidad",
      "defensa especial",
      "ataque especial",
      "defensa",
      "ataque",
      "vida",
    ];
    const stats = this.stats.map((stat) => stat.base_stat);
    console.log(stats);
    this.chartData = {
      labels: this.chartLabels,
      datasets: [
        {
          data: stats,
          label: ""
        },
      ],
    };
  }
}
