import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoCadastrarEditarRoutingModule } from './curso-cadastrar-editar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CursoCadastrarEditarComponent } from './curso-cadastrar-editar/curso-cadastrar-editar.component';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatSelectModule} from '@angular/material/select'; 


@NgModule({
  declarations: [
    CursoCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    CursoCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule
  ]
})
export class CursoCadastrarEditarModule { }
