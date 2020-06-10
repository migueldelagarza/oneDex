import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { AlertingComponent } from './components/alerting/alerting.component';
import { MaterialModule } from './material/material.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './components/pokemon-view/pokemon-view.component';
import { StatsComponent } from './components/stats/stats.component';
import { TranslateEsPipe } from './pipes/translate-es.pipe';

@NgModule({
  declarations: [
    LoadingComponent,
    AlertingComponent,
    PokemonListComponent,
    PokemonViewComponent,
    StatsComponent,
    TranslateEsPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    LoadingComponent,
    AlertingComponent,
    PokemonListComponent,
    StatsComponent
  ],
  entryComponents: [PokemonViewComponent]
})
export class SharedModule { }
