import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaCadastrarEditarComponent } from './disciplina-cadastrar-editar/disciplina-cadastrar-editar.component';

const routes: Routes = [
  {path: "", component: DisciplinaCadastrarEditarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaCadastrarEditarRoutingModule { }
