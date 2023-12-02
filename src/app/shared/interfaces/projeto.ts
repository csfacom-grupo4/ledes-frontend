import { Papel } from './papel';
import { SituacaoProjeto } from './situacao-projeto';
import { TipoProjeto } from './tipo-projeto';
import { Usuario } from './usuario';
import { Vinculo } from './vinculo';

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
  tipoVinculo?: Vinculo;
  tipoPapel?: Papel;
  usuario?: Usuario;
}
