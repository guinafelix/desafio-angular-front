import { HomeComponent } from './home/home.component';

export default [
  {path:"", component:HomeComponent},
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
  }
]