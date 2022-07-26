import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyboardComponent } from './pages/keyboard.component';
import { PokedexListComponent } from './pages/pokedex-list.component';
import { RecentListComponent } from './pages/recent-list.component';


const routes: Routes = [
  { path: '', component: PokedexListComponent },
  { path: 'teclado', component: KeyboardComponent },
  { path: 'recientes', component: RecentListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
