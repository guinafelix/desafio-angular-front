import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = "http://localhost:8080/api"
  private endpoint = "/usuarios"
  private createdEndpoint = "/usuario"


  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseUrl}${this.endpoint}`)
  }

  cadastrar(usuario: Usuario): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}${this.createdEndpoint}`, usuario)
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseUrl}${this.createdEndpoint}/${id}`)
  }

  atualizar(usuario: Usuario): Observable<void> {
    return this.httpClient.patch<void>(`${this.baseUrl}${this.createdEndpoint}/${usuario.id}`, usuario)  
  }
}
