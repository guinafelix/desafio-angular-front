import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private baseUrl = "http://localhost:8080/api"
  private endpoint = "/disciplinas"

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Disciplina[]> {
    return this.httpClient.get<Disciplina[]>(`${this.baseUrl}${this.endpoint}`)
  }

}
