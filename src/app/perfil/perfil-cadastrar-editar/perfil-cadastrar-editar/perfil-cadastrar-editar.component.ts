import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfilService } from '../../perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-cadastrar-editar',
  templateUrl: './perfil-cadastrar-editar.component.html',
  styleUrls: ['./perfil-cadastrar-editar.component.scss']
})
export class PerfilCadastrarEditarComponent {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private perfilService: PerfilService,
    private router: Router
    ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
    })
  }

  salvar() {
    this.perfilService.cadastrar(this.formGroup.value).subscribe(
      perfilCadastrado => {
        this.router.navigateByUrl("/perfis");
      },
      error => {
        alert("Erro ao cadastrar perfil!")
      }
    );
  }
}
