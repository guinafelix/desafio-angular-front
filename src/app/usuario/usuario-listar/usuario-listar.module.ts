import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioListarRoutingModule } from './usuario-listar-routing.module';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';


@NgModule({
  declarations: [
    UsuarioListarComponent
  ],
  imports: [
    CommonModule,
    UsuarioListarRoutingModule
  ]
})
export class UsuarioListarModule { }
