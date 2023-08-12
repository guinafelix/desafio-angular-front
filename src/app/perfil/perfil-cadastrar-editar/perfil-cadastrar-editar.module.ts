import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilCadastrarEditarRoutingModule } from './perfil-cadastrar-editar-routing.module';
import { PerfilCadastrarEditarComponent } from './perfil-cadastrar-editar/perfil-cadastrar-editar.component';


@NgModule({
  declarations: [
    PerfilCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    PerfilCadastrarEditarRoutingModule
  ]
})
export class PerfilCadastrarEditarModule { }
