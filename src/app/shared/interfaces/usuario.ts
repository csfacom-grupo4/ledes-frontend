import { Vinculo } from './vinculo';
import { Papel } from './papel';
import { Projeto } from './projeto';
export interface Usuario {
  id?: number;
  nome?: string;
  sobrenome?: any;
  linkedin?: any;
  github?: any;
  curso?: any;
  funcao?: number;
  foto?: any;
  projetoUsuarios?: ProjetoUsuario[];
}

export interface ProjetoUsuario {
  id?: number;
  projeto?: Projeto;
  dataEntrada?: string;
  dataSaida?: any;
  tipoVinculo?: Vinculo;
  tipoPapel?: Papel;
  membroAtivo?: boolean;
}

export interface Coordenador {
  id?: number;
  nome?: string;
  sobrenome?: any;
  curso?: any;
  funcao?: number;
  foto?: any;
}
