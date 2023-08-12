import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../../perfil.model';
import { PerfilService } from '../../perfil.service';

@Component({
  selector: 'app-perfil-listar',
  templateUrl: './perfil-listar.component.html',
  styleUrls: ['./perfil-listar.component.scss']
})
export class PerfilListarComponent  implements OnInit{
  
    perfis$: Observable<Perfil[]> | undefined;
    constructor(private perfilService: PerfilService) { }
  
    ngOnInit(): void {
      this.listarPerfis();
    }

    listarPerfis() {
      this.perfis$ = this.perfilService.listar();
    } 
}
