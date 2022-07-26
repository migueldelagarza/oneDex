import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading.component';
import { AlertingComponent } from './components/alerting.component';
import { MaterialModule } from './material/material.module';
import { TranslateEsPipe } from './pipes/translate-es.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoadingComponent,
    AlertingComponent,
    TranslateEsPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    LoadingComponent,
    AlertingComponent,
    TranslateEsPipe,
    ReactiveFormsModule
  ],
  entryComponents: []
})
export class SharedModule { }
