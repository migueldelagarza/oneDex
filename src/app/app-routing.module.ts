import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then( module => module.CoreModule) },
  { path: 'pokedex', loadChildren: () => import('./modules/pokedex/pokedex.module').then( module => module.PokedexModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
