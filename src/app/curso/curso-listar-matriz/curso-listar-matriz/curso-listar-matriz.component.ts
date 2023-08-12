import { Component } from '@angular/core';
import { Curso } from '../../curso.model';
import { Observable } from 'rxjs';
import { CursoService } from '../../curso.service';

@Component({
  selector: 'app-curso-listar-matriz',
  templateUrl: './curso-listar-matriz.component.html',
  styleUrls: ['./curso-listar-matriz.component.scss']
})
export class CursoListarMatrizComponent {
  curso$: Observable<Curso>;

  colunasTabela = ['id', 'semestre', 'disciplina', 'cargaHoraria'];

  constructor(private cursoService: CursoService) { }

  ngOnInit(id: string): void {
    this.listarCursoMatriz(id);
  }

  listarCursoMatriz(id: string) {
    this.curso$ = this.cursoService.listarMatriz(id);
  } 
}
