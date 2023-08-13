import { Injectable } from '@angular/core';
import { Usuario } from '../usuario.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioResolverService implements Resolve<Usuario> {

  constructor(private usuarioService: UsuarioService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Usuario> {
    const id = route.params['id'];
    if (id){
      return this.usuarioService.buscarPorId(id);
    } else {
      return EMPTY;
    }
  }
}
