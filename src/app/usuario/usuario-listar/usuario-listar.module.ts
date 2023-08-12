import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioListarRoutingModule } from './usuario-listar-routing.module';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UsuarioListarComponent
  ],
  imports: [
    CommonModule,
    UsuarioListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class UsuarioListarModule { }
