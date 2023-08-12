import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilCadastrarEditarComponent } from './perfil-cadastrar-editar/perfil-cadastrar-editar.component';

const routes: Routes = [
  {path:"", component:PerfilCadastrarEditarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilCadastrarEditarRoutingModule { }
