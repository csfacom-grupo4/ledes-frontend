import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {
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
