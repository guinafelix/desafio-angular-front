import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateUser, Usuario, loginDto, loginResponseDto } from './usuario.model';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

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

  async login(user: loginDto) {
    const result = await this.httpClient.post<loginResponseDto>(`${this.baseUrl}${this.loginEndpoint}`, user).toPromise();
    if (result && result.token) {
      window.localStorage.setItem('token', result.token);
      return true;
    }
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwtDecode(token)
    if (decoded.exp === undefined) {
      return null as any;
    }
    const date = new Date(0)
    date.setUTCSeconds(decoded.exp)
    return date
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true
    }
    const date = this.getTokenExpirationDate(token)
    if (date === undefined) {
      return false
    }
    return !(date.valueOf() > new Date().valueOf())
  }

  isUserLogged(): boolean {
    const token = this.getToken()
    if (!token) {
      return false
    }else if (this.isTokenExpired(token)) {
      return false
    }
    return true 
  }
}

