export interface Noticia {
    id: number
    capa: string
    thumbnail: string
    titulo: string
    corpo: string
    autor: Autor
    destaque: boolean
    dataAgendamento: string
    visibilidade: number
  }
  
  export interface Autor {
    id: number
    nome: string
    sobrenome: any
    linkedin: any
    github: any
    curso: any
    funcao: number
    foto: any
  }