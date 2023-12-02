import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/shared/interfaces/noticia';
import { NoticiasService } from 'src/app/shared/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent {
  primeiroItemAberto = true;
  termoPesquisa: string = '';
  @Input() noticia: any;
/*
noticias:any[] = [
    {
      id: 1,
      capa:'https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3007&q=80',
      titulo: 'Título 1',
      corpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      destaque: true,
      thumbnail:
        'https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3007&q=80',
        dataAgendamento: "2023-01-12T00:00:00.000Z",
        autor: {
          id:1,
          nome:'tiago'
        }
      },
    {

      id: 2,
      capa:'https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3007&q=80',
      titulo: 'Os Vingadores Enfrentam uma Nova Ameaça Cósmica',
      corpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      destaque: true,
      thumbnail:
        'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
      dataAgendamento: "2023-01-12T00:00:00.000Z",
      autor: {
        id:1,
        nome:'Tiago'
      }
    },
    {
      id: 3,
      capa:'https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3007&q=80',
      titulo: 'Doutor Estranho Desvenda um Novo Reino Místico',
      corpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      destaque: true,
      thumbnail:

        'https://images.unsplash.com/photo-1605235904827-2fc511a86dd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
      dataAgendamento: "2023-01-12T00:00:00.000Z",
      autor: {
        id:2,
        nome:'Vitor'
      }
      },
    {
      id: 4,
      capa:'https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3007&q=80',
      titulo: 'Loki Trai Novamente e Desencadeia o Caos',
      corpo:null,
      destaque: null,
      thumbnail:
        'https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80',
      dataAgendamento: "2023-01-12T00:00:00.000Z",
      autor: {
        id:1,
        nome:null
      }
      },
    {
      id: 5,
      capa:'https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3007&q=80',
      titulo: 'Os X-Men Lutam contra uma Mutação Descontrolada',
      corpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      destaque: true,
      thumbnail:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      dataAgendamento: "2023-01-13T00:00:00.000Z",
      autor: {
        id:1,
        nome:'Tiago'
      }
      },
  ];*/
  noticias!: Noticia[];

  ngOnInit() {
    this.noticiasService.listarNoticias().subscribe({
      next: (noticias) => (this.noticias = noticias),
    });
  }

  //Filtro para noticias em destaque
  noticiasDestaques(): Noticia[]{
    if (!this.noticias) {
      return []; // Retorna um array vazio se `noticias` for undefined
    }
          // Variável booleana para filtragem
      const isAtivo = true;

      // Filtrar a lista de objetos com base na variável booleana
      const listaFiltrada = this.noticias.filter(objeto => objeto.destaque === isAtivo);
      return listaFiltrada;  
}

//filtro de pesquisa da lista de notícias
 
filtrarNoticias(): Noticia[] {
  if (!this.termoPesquisa.trim()) {
    return this.noticias; // Retorna todas as noticias se a busca estiver vazia
  }

  // Usar 'keyof Noticia' para garantir que as propriedades sejam chaves válidas de Noticia
  const propriedadesExcluir: (keyof Noticia)[] = ['id']; 

  return this.noticias.filter(noticia => {
    // Copiando o objeto noticia
    const noticiaSemVariaveisExcluidas = { ...noticia };
    
    // Excluindo propriedades
    propriedadesExcluir.forEach(prop => {
      delete noticiaSemVariaveisExcluidas[prop as keyof Noticia];
    });
    
    // Realiza a filtragem
    return JSON.stringify(noticiaSemVariaveisExcluidas).toLowerCase().includes(this.termoPesquisa.toLowerCase());
  });
}


  constructor(private router: Router,  private noticiasService: NoticiasService) {}

 // Método para formatar a classe
  formatarClasse(index: number) {
    if (this.primeiroItemAberto && index === 0) {
      return 'uk-open';
    } else {
      return '';
    }
  }

//Método para formatar data/hora
formatarDataHora(data: string) : string {
  const dataObj = new Date(data);
    const dia = dataObj.getDate();
    const meses = [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ];
    const mes = meses[dataObj.getMonth()];
    const ano = dataObj.getFullYear();
    const hora = dataObj.toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' });
    return `${dia} de ${mes} de ${ano} - ${hora}`;
}
}
