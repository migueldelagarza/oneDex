import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DrawerComponent } from './components/drawer/drawer.component';
import { HeaderComponent } from './components/header/header.component';
import { ShellComponent } from './components/shell/shell.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoadingInterceptor } from './interceptors/loading.interceptor';


@NgModule({
  declarations: [HeaderComponent, DrawerComponent, ShellComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  exports: [ShellComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})
export class CoreModule { }
