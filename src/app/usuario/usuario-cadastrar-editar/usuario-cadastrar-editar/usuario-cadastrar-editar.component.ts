import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-cadastrar-editar',
  templateUrl: './usuario-cadastrar-editar.component.html',
  styleUrls: ['./usuario-cadastrar-editar.component.scss']
})
export class UsuarioCadastrarEditarComponent {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
    ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      perfilId: ['', Validators.required],
      cursoId: [''],
      matricula: ['', Validators.required]
    })
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
