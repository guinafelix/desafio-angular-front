import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCadastrarEditarRoutingModule } from './usuario-cadastrar-editar-routing.module';
import { UsuarioCadastrarEditarComponent } from './usuario-cadastrar-editar/usuario-cadastrar-editar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    UsuarioCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    UsuarioCadastrarEditarRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule
  ]
})
export class UsuarioCadastrarEditarModule { 
  
}
