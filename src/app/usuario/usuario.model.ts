import { Curso } from "../curso/curso.model";
import { Perfil } from "../perfil/perfil.model";

export interface Usuario {
  id: number;
  nome: string;
  matricula?: string;
  curso?: Curso;
  perfil: Perfil;
}

export interface UpdateUser {
  id: number;
  nome?: string;
  perfilId?: number;
  cursoId?: number;
  matricula?: string;
}