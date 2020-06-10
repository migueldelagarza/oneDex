import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'buscar', pathMatch: 'full' },
  { path: 'pokedex', loadChildren: () => import('./modules/pokedex/pokedex.module').then( module => module.PokedexModule) },
  { path: 'buscar', loadChildren: () => import('./modules/search/search.module').then( module => module.SearchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
