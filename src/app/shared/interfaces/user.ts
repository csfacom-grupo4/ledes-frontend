export interface User {
  nome: string;
  sobrenome: string;
  email: string;
  password: string;
  linkedin: string;
  github: string;
  curso: string;
  funcao: number;
  foto: File;
  permissaoAdmin: boolean;
  permissaoProjetos: boolean;
  permissaoPublicacoes: boolean;
  permissaoUsuarios: boolean;
}
