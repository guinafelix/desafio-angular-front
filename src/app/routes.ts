import { HomeComponent } from './home/home.component';
import { authGuard } from './usuario/auth.guard';
import { AuthenticationComponent } from './usuario/layout/authentication/authentication.component';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';

type PathMatch = 'full' | 'prefix';

export default [
  {
    path:"", 
    component:HomeComponent, 
    children:[
      {
        path:"perfis",
        loadChildren: () => import('./perfil/perfil-listar/perfil-listar.module').then(m => m.PerfilListarModule) 
      },
      {
        path: "perfil/cadastrar",
        loadChildren: () => import('./perfil/perfil-cadastrar-editar/perfil-cadastrar-editar.module').then(m => m.PerfilCadastrarEditarModule)
      },
      {
        path: "perfil/editar/:id",
        loadChildren: () => import('./perfil/perfil-cadastrar-editar/perfil-cadastrar-editar.module').then(m => m.PerfilCadastrarEditarModule)
      }, 
      {
        path: "disciplinas",
        loadChildren: () => import('./disciplina/disciplina-listar/disciplina-listar.module').then(m => m.DisciplinaListarModule)
      },
      {
        path: "disciplina/cadastrar",
        loadChildren: () => import('./disciplina/disciplina-cadastrar-editar/disciplina-cadastrar-editar.module').then(m => m.DisciplinaCadastrarEditarModule)
      },
      {
        path: "disciplina/editar/:id",
        loadChildren: () => import('./disciplina/disciplina-cadastrar-editar/disciplina-cadastrar-editar.module').then(m => m.DisciplinaCadastrarEditarModule)
      },
      {
        path: "cursos",
        loadChildren: () => import('./curso/curso-listar/curso-listar.module').then(m => m.CursoListarModule) 
      },
      {
        path: "curso/matriz/:id",
        loadChildren: () => import('./curso/curso-listar-matriz/curso-listar-matriz.module').then(m => m.CursoListarMatrizModule)
      },
      {
        path: "curso/cadastrar",
        loadChildren: () => import('./curso/curso-cadastrar-editar/curso-cadastrar-editar.module').then(m => m.CursoCadastrarEditarModule)
      },
      {
        path:"usuarios",
        loadChildren: () => import('./usuario/usuario-listar/usuario-listar.module').then(m => m.UsuarioListarModule)
      },
      {
        path:"usuario",
        loadChildren: () => import('./usuario/usuario-cadastrar-editar/usuario-cadastrar-editar.module').then(m => m.UsuarioCadastrarEditarModule)
      },
      {
        path:"usuario",
        loadChildren: () => import('./usuario/usuario-cadastrar-editar/usuario-cadastrar-editar.module').then(m => m.UsuarioCadastrarEditarModule)
      }
    ],
    canActivate: [authGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' as PathMatch},
      { path: 'login', component: UsuarioLoginComponent}
    ]
  }
]