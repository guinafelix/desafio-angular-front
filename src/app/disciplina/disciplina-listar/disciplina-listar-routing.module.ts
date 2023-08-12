import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaListarComponent } from './disciplina-listar/disciplina-listar.component';

const routes: Routes = [
  {path:"", component: DisciplinaListarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaListarRoutingModule { }
