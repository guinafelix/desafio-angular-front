import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from './perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private baseUrl = "http://localhost:8080/api"
  private endpoint = "/perfis"
  private createEndpoint = "/perfil"

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Perfil[]> {
    return this.httpClient.get<Perfil[]>(`${this.baseUrl}${this.endpoint}`)
  }

  cadastrar(perfil: Perfil): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}${this.createEndpoint}`, perfil)
  }
}
