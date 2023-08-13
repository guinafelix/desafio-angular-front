import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from './usuario.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const usuarioService: UsuarioService  = inject(UsuarioService);

  if (usuarioService.isUserLogged()) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
