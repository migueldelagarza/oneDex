import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonViewComponent } from 'src/app/shared/components/pokemon-view/pokemon-view.component';

@Injectable({
  providedIn: 'root'
})
export class DetailPokemonService {

  constructor(private dialog: MatDialog) { }

  public openPokemonDetail(index: number): void {
    index = index < 1 ? 1 : index;
    index = index > 721 ? 721 : index;
    this.dialog.open(PokemonViewComponent, {
      height: '100vh',
      maxHeight: 'none',
      maxWidth: 'none',
      width: '100vw',
      data: index
    })
  }
}
