import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilCadastrarEditarRoutingModule } from './perfil-cadastrar-editar-routing.module';
import { PerfilCadastrarEditarComponent } from './perfil-cadastrar-editar/perfil-cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PerfilCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    PerfilCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class PerfilCadastrarEditarModule { }
