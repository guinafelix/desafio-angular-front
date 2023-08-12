import { Component } from '@angular/core';
import { Curso } from '../../curso.model';
import { Observable } from 'rxjs';
import { CursoService } from '../../curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-listar-matriz',
  templateUrl: './curso-listar-matriz.component.html',
  styleUrls: ['./curso-listar-matriz.component.scss']
})
export class CursoListarMatrizComponent {
  curso$: Observable<Curso>;

  colunasTabela = ['id', 'nome', 'cargaHoraria'];

  constructor (
    private cursoService: CursoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']; // Captura o id dos parâmetros da rota
    this.curso$ = this.cursoService.listarMatriz(id);
  }
}
