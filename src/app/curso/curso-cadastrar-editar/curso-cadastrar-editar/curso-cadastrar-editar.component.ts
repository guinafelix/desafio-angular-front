import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../../curso.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Disciplina } from 'src/app/disciplina/disciplina.model';
import { DisciplinaService } from 'src/app/disciplina/disciplina.service';

@Component({
  selector: 'app-curso-cadastrar-editar',
  templateUrl: './curso-cadastrar-editar.component.html',
  styleUrls: ['./curso-cadastrar-editar.component.scss']
})
export class CursoCadastrarEditarComponent {

  formGroup: FormGroup;
  disciplinas$: Observable<Disciplina[]>

  constructor(private formBuilder: FormBuilder,
    private disciplinaService: DisciplinaService,
    private router: Router,
    private cursoService: CursoService) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      duracaoEmSemestres: ['', Validators.required],
      ofertas: this.formBuilder.array([
        this.createOfertaFormGroup(),
      ])
    });
    this.disciplinas$ = this.disciplinaService.listar();
  }

  get ofertas(): FormArray {
    return this.formGroup.get('ofertas') as FormArray;
  }

  createOfertaFormGroup(): FormGroup {
    return this.formBuilder.group({
      semestre: ['', Validators.required],
      disciplinasId: [[]]
    });
  }

  addOferta() {
    this.ofertas.push(this.createOfertaFormGroup());
  }


  removeOferta(index: number) {
    this.ofertas.removeAt(index);
  }

  salvar(): void {
    this.cursoService.cadastrar(this.formGroup.value).subscribe(
      cursoCadastrado => {
        this.router.navigateByUrl("/cursos");
      },
      error => {
        alert("Erro ao cadastrar curso!");
      }
    );
  }
}
