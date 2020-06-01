import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'one-footer',
  template: `
    <mat-toolbar>

    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      background: #263238;
      bottom: 0;
      position: fixed;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
