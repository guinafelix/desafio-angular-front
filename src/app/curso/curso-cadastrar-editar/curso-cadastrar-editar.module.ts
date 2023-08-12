import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoCadastrarEditarRoutingModule } from './curso-cadastrar-editar-routing.module';
import { CursoCadastarEditarComponent } from './curso-cadastar-editar/curso-cadastar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CursoCadastrarEditarComponent } from './curso-cadastrar-editar/curso-cadastrar-editar.component';


@NgModule({
  declarations: [
    CursoCadastarEditarComponent,
    CursoCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    CursoCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class CursoCadastrarEditarModule { }
