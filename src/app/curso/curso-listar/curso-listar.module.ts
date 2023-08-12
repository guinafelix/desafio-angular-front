import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoListarRoutingModule } from './curso-listar-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CursoListarComponent } from './curso-listar.component';


@NgModule({
  declarations: [
    CursoListarComponent
  ],
  imports: [
    CommonModule,
    CursoListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class CursoListarModule { 
  

}
