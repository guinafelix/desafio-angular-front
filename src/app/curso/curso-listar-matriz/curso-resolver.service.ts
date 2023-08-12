import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Curso } from '../curso.model';
import { Observable, empty } from 'rxjs';
import { CursoService } from '../curso.service';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverService implements Resolve<Curso>{

  constructor(private cursoService: CursoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Curso | Observable<Curso> | Promise<Curso> {
    const id = route.params['id'];
    if (id) {
      return this.cursoService.listarMatriz(id);
    }
    return empty();
  }
}
