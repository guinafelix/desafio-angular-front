import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisciplinaService } from '../../disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplina-cadastrar-editar',
  templateUrl: './disciplina-cadastrar-editar.component.html',
  styleUrls: ['./disciplina-cadastrar-editar.component.scss']
})
export class DisciplinaCadastrarEditarComponent {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private disciplinaService: DisciplinaService,
    private router: Router
    ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      cargaHoraria: ['', Validators.required],
    });
  }

  salvar() {
    this.disciplinaService.cadastrar(this.formGroup.value).subscribe(
      disciplinaCadastrada => {
        this.router.navigateByUrl("/disciplinas");
      },
      error => {
        alert("Erro ao cadastrar disciplina!");
      }
    );
  }
}
