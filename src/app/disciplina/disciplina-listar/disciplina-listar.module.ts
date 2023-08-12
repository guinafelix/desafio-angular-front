import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaListarRoutingModule } from './disciplina-listar-routing.module';
import { DisciplinaListarComponent } from './disciplina-listar/disciplina-listar.component';


@NgModule({
  declarations: [
    DisciplinaListarComponent
  ],
  imports: [
    CommonModule,
    DisciplinaListarRoutingModule
  ]
})
export class DisciplinaListarModule { }
