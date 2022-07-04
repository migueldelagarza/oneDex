import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from '@components/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  idLoading: string;

  constructor(private dialog: MatDialog) {}

  public show(): void {
    this.idLoading = this.dialog.open(LoadingComponent).id;
  }

  public hide(): void {
    this.dialog.closeAll();
  }
}
