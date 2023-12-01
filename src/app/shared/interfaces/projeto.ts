import { SituacaoProjeto } from './situacao-projeto';
import { TipoProjeto } from './tipo-projeto';

export interface Projeto {
  foto?: string;
  titulo?: string;
  descricao?: string;
  dataInicio?: string;
  dataTermino?: string;
  coordenador?: Coordenador;
  situacaoProjeto?: SituacaoProjeto;
  tipoProjeto?: TipoProjeto;
  projetoUsuarios?: ProjetoUsuario[];
}

export interface Coordenador {
  id?: number;
  nome?: string;
  foto?: any;
}

export interface ProjetoUsuario {
  id?: number;
  membroAtivo?: boolean;
  tipoVinculo?: TipoVinculo;
  tipoPapel?: TipoPapel;
  usuario?: Usuario;
}

export interface TipoVinculo {
  id?: number;
  nome?: string;
}

export interface TipoPapel {
  id?: number;
  nome?: string;
}

export interface Usuario {
  id?: number;
  nome?: string;
  foto?: any;
}
