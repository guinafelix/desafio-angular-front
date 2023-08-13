import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UsuarioCadastrarEditarComponent } from './usuario-cadastrar-editar/usuario-cadastrar-editar.component';
import { UsuarioResolverService } from './usuario-resolver.service';

const routes: Routes = [
  { path: "cadastrar", component: UsuarioCadastrarEditarComponent},
  { path: "editar/:id", component: UsuarioCadastrarEditarComponent, 
    resolve: {
      usuario: UsuarioResolverService
    }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioCadastrarEditarRoutingModule {
 
}
