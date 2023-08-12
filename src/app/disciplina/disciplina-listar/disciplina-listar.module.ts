import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaListarRoutingModule } from './disciplina-listar-routing.module';
import { DisciplinaListarComponent } from './disciplina-listar/disciplina-listar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DisciplinaListarComponent
  ],
  imports: [
    CommonModule,
    DisciplinaListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class DisciplinaListarModule { }
