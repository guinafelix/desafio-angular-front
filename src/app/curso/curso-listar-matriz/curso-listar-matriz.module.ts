import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoListarMatrizRoutingModule } from './curso-listar-matriz-routing.module';
import { CursoListarMatrizComponent } from './curso-listar-matriz/curso-listar-matriz.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CursoListarMatrizComponent
  ],
  imports: [
    CommonModule,
    CursoListarMatrizRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class CursoListarMatrizModule { }
