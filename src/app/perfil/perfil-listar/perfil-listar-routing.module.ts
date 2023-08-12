import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilListarComponent } from './perfil-listar/perfil-listar.component';

const routes: Routes = [
  {path:"", component:PerfilListarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilListarRoutingModule { }
