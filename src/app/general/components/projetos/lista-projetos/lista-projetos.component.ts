import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.scss']
})
export class ListaProjetosComponent {
  @Input() projeto: any;
 // listaProjetos: any[]; // Supondo que a API retorna uma lista de projetos
  listaProjetos: any[] = [
    { id: 1, titulo: 'Projeto de teste', data_inicio: '01/01/2023', data_termino: null , coordenador: 'Prof. Ricardo vilalba', situacao: 'EM ANDAMENTO', tipo: 'EXTENSÃO', imagem: ''},
    { id: 2, titulo: 'Projeto de verdade', data_inicio: '02/01/2023', data_termino: '01/03/2023', coordenador: 'Prof. Ricardo Kondo', situacao: 'CONCLUÍDO', tipo: 'EXTENSÃO',imagem: '' },
    { id: 3, titulo: 'Projeto de desenvolvimento de software sobre algum tema', data_inicio: '02/01/2023', data_termino: '01/05/2023', coordenador: 'Prof. Ricardo Kondo', situacao: 'CONCLUÍDO', tipo: 'EXTENSÃO',imagem: ''},
    { id: 4, titulo: 'Projeto de desenvolvimento de software sobre algum tema', data_inicio: '02/01/2023', data_termino: '01/03/2023', coordenador: 'Prof. Ricardo Kondo', situacao: 'DESCONTINUADO', tipo: 'EXTENSÃO',imagem: '' },
    // Adicione mais projetos conforme necessário
  ]; // Aqui você preenche com os dados vindos do backend
  termoPesquisa: string = '';

  filtrarProjetos(): any[] {
    if (!this.termoPesquisa.trim()) {
      return this.listaProjetos; // Retorna todos os projetos se a busca estiver vazia
    }
    // Propriedades que não devem ser utilizadas na filtragem
    const propriedadesExcluir: string[] = ['id']; // Adicione outras variáveis aqui

    // Realiza a filtragem dos projetos com base no termo de pesquisa (excluindo as propriedades listadas)
    return this.listaProjetos.filter(projeto => {
      const projetoSemVariaveisExcluidas = { ...projeto };
      
      // Remove as propriedades listadas
      propriedadesExcluir.forEach(prop => delete projetoSemVariaveisExcluidas[prop]);
      
      // Realiza a filtragem
      return JSON.stringify(projetoSemVariaveisExcluidas).toLowerCase().includes(this.termoPesquisa.toLowerCase());
    });
  }
 
  formatarClasseStatus(status: string): string {
    return status.toLowerCase().replace(/\s+/g, '-');
  }

  

}
