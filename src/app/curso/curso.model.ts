import { Disciplina } from "../disciplina/disciplina.model";

export interface Oferta {
    id: number;
    semestre: number;
    disciplinas: Disciplina[];
}

export interface CriarOferta {
    semestre: number;
    disciplinasId: Disciplina[];
}

export interface Curso {
    id: number;
    nome: string;
    duracaoEmSemestrs: number;
    ofertas: Oferta[];
}