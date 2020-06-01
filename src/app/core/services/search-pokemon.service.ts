import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchPokemonComponent } from '../components/search-pokemon/search-pokemon.component';

@Injectable({
  providedIn: 'root'
})
export class SearchPokemonService {

  constructor(private dialog: MatDialog) { }

  public openSearch(): void {
    this.dialog.open(SearchPokemonComponent);
  }
}
