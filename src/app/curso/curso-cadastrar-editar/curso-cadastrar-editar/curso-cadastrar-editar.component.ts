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
  disciplinas$: Observable<Disciplina[]>;

  constructor(
    private formBuilder: FormBuilder,
    private cursoService: CursoService,
    private router: Router,
    private disciplinaService: DisciplinaService
    ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      duracaoEmSemestres: ['', Validators.required],
      ofertas: this.formBuilder.array([])
    })
    this.disciplinas$ = this.disciplinaService.listar();
  }


  get ofertas(): FormArray {
    return this.formGroup.get('ofertas') as FormArray;
  }

  newOferta(): FormGroup {
    return this.formBuilder.group({
      semestre: ['', Validators.required],
      disciplinasId: this.formBuilder.array([])
    })
  }

  addOferta() {
    this.ofertas.push(this.newOferta());
  }
  
  removeOferta(i: number) {
    this.ofertas.removeAt(i);
  }

  ofertasDisciplinas(i: number): FormArray {
    return this.ofertas.at(i).get("disciplinasId") as FormArray;
  }

  newDisciplinas(): FormGroup {
    return this.formBuilder.group({
      id: ['', Validators.required]
    })
  }

  addDisciplinas(i: number) {
    this.ofertasDisciplinas(i).push(this.newDisciplinas());
  }

  removeDisciplinas(i: number, j: number) {
    this.ofertasDisciplinas(i).removeAt(j);
  }

  salvar() {
    this.cursoService.cadastrar(this.formGroup.value).subscribe(
      perfilCadastrado => {
        this.router.navigateByUrl("/cursos");
      },
      error => {
        alert("Erro ao cadastrar curso!")
      }
    );
  }
}
