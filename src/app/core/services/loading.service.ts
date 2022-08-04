import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  idLoading: string;
  isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }
}
