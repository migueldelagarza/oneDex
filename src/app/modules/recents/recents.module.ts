import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentsRoutingModule } from './recents-routing.module';
import { RecentListComponent } from './components/recent-list/recent-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RecentListComponent],
  imports: [
    CommonModule,
    RecentsRoutingModule,
    SharedModule
  ]
})
export class RecentsModule { }
