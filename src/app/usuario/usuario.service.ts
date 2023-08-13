import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateUser, Usuario } from './usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = "http://localhost:8080/api"
  private endpoint = "/usuarios"
  private createdEndpoint = "/usuario"
  private loginEndpoint = "/login"


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

  atualizar(usuario: UpdateUser): Observable<void> {
    const user = Object.assign({}, {
      nome: usuario?.nome,
      perfilId: usuario?.perfilId,
      cursoId: usuario?.cursoId,
      matricula: usuario?.matricula
    })
    return this.httpClient.patch<void>(`${this.baseUrl}${this.createdEndpoint}/${usuario.id}`, user)  
  }

  login(usuario: any): any {
    return new Promise((resolve) => {
      localStorage.setItem('token', 'meu-token')
      resolve(true)
    })
    // return this.httpClient.post<void>(`${this.baseUrl}${this.endpoint}/login`, usuario)
  }
}
