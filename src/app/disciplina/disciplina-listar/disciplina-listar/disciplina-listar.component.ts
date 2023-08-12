import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../../disciplina.model';
import { DisciplinaService } from '../../disciplina.service';

@Component({
  selector: 'app-disciplina-listar',
  templateUrl: './disciplina-listar.component.html',
  styleUrls: ['./disciplina-listar.component.scss']
})
export class DisciplinaListarComponent {

    disciplinas$: Observable<Disciplina[]>;

    colunasTabela = ['id', 'nome', 'cargaHoraria'];

    constructor(private disciplinaService: DisciplinaService) { }
  
    ngOnInit(): void {
      this.listarDisciplinas();
    }

    listarDisciplinas() {
      this.disciplinas$ = this.disciplinaService.listar();
    } 
}
