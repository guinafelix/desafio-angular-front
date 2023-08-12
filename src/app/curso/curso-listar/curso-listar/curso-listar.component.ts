import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../../curso.model';
import { CursoService } from '../../curso.service';

@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.component.html',
  styleUrls: ['./curso-listar.component.scss']
})
export class CursoListarComponent {
    cursos$: Observable<Curso[]>;

    colunasTabela = ['id', 'nome', 'duracaoEmSemestres', 'acoes'];

    constructor(private cursoSerivce: CursoService) { }
  
    ngOnInit(): void {
      this.listarCursos();
    }

    listarCursos() {
      this.cursos$ = this.cursoSerivce.listar();
    } 
}
