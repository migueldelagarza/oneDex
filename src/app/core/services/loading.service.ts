import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  idLoading: string;

  constructor(private dialog: MatDialog) {}

  public show(): void {
    this.dialog.open(LoadingComponent);
  }

  public hide(): void {
    this.dialog.closeAll();
  }
}
