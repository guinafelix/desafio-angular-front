import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UsuarioCadastrarEditarComponent } from './usuario-cadastrar-editar/usuario-cadastrar-editar.component';

const routes: Routes = [
  { path: "", component: UsuarioCadastrarEditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioCadastrarEditarRoutingModule {
 
}
