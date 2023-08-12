import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../usuario.model';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.scss']
})
export class UsuarioListarComponent {
  usuarios$: Observable<Usuario[]>;

  colunasTabela = ['id', 'nome', 'matricula', 'perfil', 'curso'];

  constructor (
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    return this.listar();
  }

  listar(): void {
    this.usuarios$ = this.usuarioService.listar();
  }
}
