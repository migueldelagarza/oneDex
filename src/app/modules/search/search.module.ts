import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { KeyboardComponent } from './components/keyboard/keyboard.component';


@NgModule({
  declarations: [SearchFormComponent, KeyboardComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
