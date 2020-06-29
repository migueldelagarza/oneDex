import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SearchPokemonService {
  constructor(private dialog: MatDialog) { }

  public openSearch(): void {
    this.dialog.open(null);
  }
}
