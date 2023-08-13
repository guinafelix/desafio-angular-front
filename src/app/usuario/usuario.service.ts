import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateUser, Usuario, loginDto, loginResponseDto } from './usuario.model';
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

  login(login: loginDto): boolean {
    const response = this.httpClient.post<loginResponseDto>(`${this.baseUrl}${this.loginEndpoint}`, login)
    response.subscribe((res) => {
      localStorage.setItem('token', res.token)
      return true
    })
    return false
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }
}
