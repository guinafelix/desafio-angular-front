import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/perfil/perfil.model';
import { Curso } from 'src/app/curso/curso.model';
import { PerfilService } from 'src/app/perfil/perfil.service';
import { CursoService } from 'src/app/curso/curso.service';
import { Usuario } from '../../usuario.model';

@Component({
  selector: 'app-usuario-cadastrar-editar',
  templateUrl: './usuario-cadastrar-editar.component.html',
  styleUrls: ['./usuario-cadastrar-editar.component.scss']
})
export class UsuarioCadastrarEditarComponent {
  formGroup: FormGroup;
  usuario: Usuario;
  perfis$: Observable<Perfil[]>;
  cursos$: Observable<Curso[]>;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private perfilService: PerfilService,
    private cursoService: CursoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.usuario = this.activatedRoute.snapshot.data['usuario'];
    this.formGroup = this.formBuilder.group({
      id: [{value: (this.usuario && this.usuario.id) ? this.usuario.id : null, disabled: false}],
      nome: [(this.usuario && this.usuario.id) ? this.usuario.nome : null, Validators.required],
      senha: [{value: '', disabled: (this.usuario && this.usuario.id) ? true : false}, Validators.required],
      perfilId: [(this.usuario && this.usuario.id) ? this.usuario.perfil.id : null],
      cursoId: [(this.usuario && this.usuario.id) ? this.usuario.curso?.id : null],
      matricula: [(this.usuario && this.usuario.id) ? this.usuario?.matricula : null],
    })
    this.cursos$ = this.cursoService.listar();
    this.perfis$ = this.perfilService.listar();
  }

  salvar() {
    if (this.usuario.id && this.usuario.id) {
      this.usuarioService.atualizar(this.formGroup.value).subscribe(
        usuarioAtualizado => {
          this.router.navigateByUrl("/usuarios");
        },
        error => {
          alert("Erro ao editar usuário!")
        }
      );
    } else {
      this.usuarioService.cadastrar(this.formGroup.value).subscribe(
        usuarioCadastrado => {
          this.router.navigateByUrl("/usuarios");
        },
        error => {
          alert("Erro ao cadastrar usuário!")
        }
      );
    }
  }
}
