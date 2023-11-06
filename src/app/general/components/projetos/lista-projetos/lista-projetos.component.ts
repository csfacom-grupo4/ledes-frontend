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
      { id: 1, titulo: 'Projeto de desenvolvimento de software sobre algum tema', coordenador: 'Prof. Ricardo Kondo', status: 'EM ANDAMENTO', tipo: 'EXTENSÃO', imagem: '', dataInicio: '01/01/2023' },
      { id: 2, titulo: 'Projeto de desenvolvimento de software sobre algum tema', coordenador: 'Prof. Ricardo Kondo', status: 'CONCLUÍDO', tipo: 'EXTENSÃO',imagem: '', dataInicio: '02/01/2023' },
      { id: 3, titulo: 'Projeto de desenvolvimento de software sobre algum tema', coordenador: 'Prof. Ricardo Kondo', status: 'CONCLUÍDO', tipo: 'EXTENSÃO',imagem: '', dataInicio: '02/01/2023' },
      { id: 4, titulo: 'Projeto de desenvolvimento de software sobre algum tema', coordenador: 'Prof. Ricardo Kondo', status: 'DESCONTINUADO', tipo: 'EXTENSÃO',imagem: '', dataInicio: '02/01/2023' },
      // Adicione mais projetos conforme necessário
    ];
  }
  formatarClasseStatus(status: string): string {
    return status.toLowerCase().replace(/\s+/g, '-');
  }

  

}
