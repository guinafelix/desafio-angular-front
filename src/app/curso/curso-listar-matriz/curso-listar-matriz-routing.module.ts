import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListarMatrizComponent } from './curso-listar-matriz/curso-listar-matriz.component';

const routes: Routes = [
  {path: "", component: CursoListarMatrizComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoListarMatrizRoutingModule { }
