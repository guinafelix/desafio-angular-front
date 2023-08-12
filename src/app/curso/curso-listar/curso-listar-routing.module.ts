import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListarComponent } from './curso-listar/curso-listar.component';

const routes: Routes = [
  {path: "", component: CursoListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoListarRoutingModule { }
