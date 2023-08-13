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
  private findByIdEndpoint = "/curso"
  private createEndpoint = "/curso"

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(`${this.baseUrl}${this.endpoint}`)
  }

  listarMatriz(id: string): Observable<Curso> {
    return this.httpClient.get<Curso>(`${this.baseUrl}${this.findByIdEndpoint}/${id}`)
  } 

  cadastrar(curso: Curso): Observable<Curso> {
    return this.httpClient.post<Curso>(`${this.baseUrl}${this.createEndpoint}`, curso)
  }
}
