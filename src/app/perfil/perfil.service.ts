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

  constructor(private httpClient: HttpClient) {}

  public listar(): Observable<Perfil[]> {
    return this.httpClient.get<Perfil[]>(`${this.baseUrl}${this.endpoint}`)
  }
}
