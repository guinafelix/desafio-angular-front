import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private baseUrl = "http://localhost:8080/api"
  private endpoint = "/cursos"

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(`${this.baseUrl}${this.endpoint}`)
  }
}
