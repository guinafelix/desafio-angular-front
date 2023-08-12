import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilListarRoutingModule } from './perfil-listar-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PerfilListarComponent } from './perfil-listar/perfil-listar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [PerfilListarComponent],
  imports: [
    CommonModule,
    PerfilListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ]
})
export class PerfilListarModule { }
