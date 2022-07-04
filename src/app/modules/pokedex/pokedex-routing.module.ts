import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyboardComponent } from './pages/keyboard.component';
import { PokedexListComponent } from './pages/pokedex-list.component';


const routes: Routes = [
  { path: '', component: PokedexListComponent },
  { path: 'teclado', component: KeyboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
