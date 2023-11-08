import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.scss']
})
export class ListaProjetosComponent {
  @Input() projeto: any;
  listaProjetos: any[]; // Supondo que a API retorna uma lista de projetos

  constructor() {
    // Simulação de dados da API (substitua isso com a lógica de chamada real da API)
    this.listaProjetos = [
      { id: 1, titulo: 'Projeto de desenvolvimento de software sobre algum tema', data_inicio: '01/01/2023', data_termino: null , coordenador: 'Prof. Ricardo Kondo', situacao: 'EM ANDAMENTO', tipo: 'EXTENSÃO', imagem: ''},
      { id: 2, titulo: 'Projeto de desenvolvimento de software sobre algum tema', data_inicio: '02/01/2023', data_termino: '01/03/2023', coordenador: 'Prof. Ricardo Kondo', situacao: 'CONCLUÍDO', tipo: 'EXTENSÃO',imagem: '' },
      { id: 3, titulo: 'Projeto de desenvolvimento de software sobre algum tema', data_inicio: '02/01/2023', data_termino: '01/05/2023', coordenador: 'Prof. Ricardo Kondo', situacao: 'CONCLUÍDO', tipo: 'EXTENSÃO',imagem: ''},
      { id: 4, titulo: 'Projeto de desenvolvimento de software sobre algum tema', data_inicio: '02/01/2023', data_termino: '01/04/2023', coordenador: 'Prof. Ricardo Kondo', situacao: 'DESCONTINUADO', tipo: 'EXTENSÃO',imagem: '' },
      // Adicione mais projetos conforme necessário
    ];
  }
  formatarClasseStatus(status: string): string {
    return status.toLowerCase().replace(/\s+/g, '-');
  }

  

}
