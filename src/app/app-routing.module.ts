import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'teclado', pathMatch: 'full' },
  { path: 'pokedex', loadChildren: () => import('./modules/pokedex/pokedex.module').then( module => module.PokedexModule) },
  { path: 'teclado', loadChildren: () => import('./modules/search/search.module').then( module => module.SearchModule) },
  { path: 'recientes', loadChildren: () => import('./modules/recents/recents.module').then( module => module.RecentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
