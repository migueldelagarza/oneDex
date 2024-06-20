import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexListPage } from './pages/pokedex-list/pokedex-list.page';
import { RecentListComponent } from './pages/recent-list.component';


const routes: Routes = [
  { path: '', component: PokedexListPage },
  { path: 'recientes', component: RecentListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
