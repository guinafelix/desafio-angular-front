import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoCadastrarEditarComponent } from './curso-cadastrar-editar/curso-cadastrar-editar.component';

const routes: Routes = [
  {path: "", component: CursoCadastrarEditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoCadastrarEditarRoutingModule { }
