import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaCadastrarEditarRoutingModule } from './disciplina-cadastrar-editar-routing.module';
import { DisciplinaCadastrarEditarComponent } from './disciplina-cadastrar-editar/disciplina-cadastrar-editar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DisciplinaCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    DisciplinaCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class DisciplinaCadastrarEditarModule { }
