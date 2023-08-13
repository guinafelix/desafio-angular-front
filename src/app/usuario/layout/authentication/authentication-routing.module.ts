import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { UsuarioLoginComponent } from '../../usuario-login/usuario-login/usuario-login.component';

type PathMatch = 'full' | 'prefix';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' as PathMatch},
  { path: 'login', loadChildren: () => import('../../usuario-login/usuario-login.module').then(m => m.UsuarioLoginModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }