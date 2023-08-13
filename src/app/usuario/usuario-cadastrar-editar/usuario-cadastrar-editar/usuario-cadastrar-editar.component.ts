import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/perfil/perfil.model';
import { Curso } from 'src/app/curso/curso.model';
import { PerfilService } from 'src/app/perfil/perfil.service';
import { CursoService } from 'src/app/curso/curso.service';

@Component({
  selector: 'app-usuario-cadastrar-editar',
  templateUrl: './usuario-cadastrar-editar.component.html',
  styleUrls: ['./usuario-cadastrar-editar.component.scss']
})
export class UsuarioCadastrarEditarComponent {
  formGroup: FormGroup;
  perfis$: Observable<Perfil[]>;
  cursos$: Observable<Curso[]>;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private perfilService: PerfilService,
    private cursoService: CursoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      perfilId: ['', Validators.required],
      cursoId: [''],
      matricula: ['']
    })
    this.cursos$ = this.cursoService.listar();
    this.perfis$ = this.perfilService.listar();
  }

  salvar() {
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
