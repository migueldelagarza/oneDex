import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { DrawerComponent } from "./components/drawer.component";
import { HeaderComponent } from "./components/header.component";
import { SearchComponent } from "./components/search.component";
import { ShellComponent } from "./components/shell.component";
import { LoadingInterceptor } from "./interceptors/loading.interceptor";
import { FooterComponent } from "./components/footer.component";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { MaterialModule } from "../shared/material/material.module";
import { RouterModule } from "@angular/router";
import { LoadingService } from "./services/loading.service";

@NgModule({
  declarations: [
    HeaderComponent,
    DrawerComponent,
    ShellComponent,
    SearchComponent,
    FooterComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule],
  exports: [ShellComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LoadingService },
  ],
})
export class CoreModule {}
