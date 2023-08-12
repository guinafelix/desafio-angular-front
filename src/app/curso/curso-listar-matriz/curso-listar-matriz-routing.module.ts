import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListarMatrizComponent } from './curso-listar-matriz/curso-listar-matriz.component';
import { CursoResolverService } from './curso-resolver.service';

const routes: Routes = [
  {
    path: "", component: CursoListarMatrizComponent,
    resolve: {
      curso: CursoResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoListarMatrizRoutingModule { }
