import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecentListComponent } from './components/recent-list/recent-list.component';


const routes: Routes = [
  { path: '', component: RecentListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentsRoutingModule { }
