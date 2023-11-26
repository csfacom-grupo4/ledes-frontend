import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-campo-pesquisa',
  templateUrl: './campo-pesquisa.component.html',
  styleUrls: ['./campo-pesquisa.component.scss']
})
export class CampoPesquisaComponent {
  @Input() lista: any[] = [];
  @Input() termoPesquisa: string = '';
  @Input() termosExcluir: string[] = [];

  constructor() {}

  // Lógica de filtragem, removendo os termos a serem excluídos
  filtrarElementos(): any[] {
    return this.lista.filter(item => {
      // Implemente a lógica de filtragem de acordo com o termo de pesquisa e os termos a serem excluídos
      // Exemplo: 
      // Verifica se o termo de pesquisa está presente e não está na lista de termos a serem excluídos
      return (
        this.termoPesquisa &&
        !this.termosExcluir.some(termoExcluir =>
          item.titulo.toLowerCase().includes(termoExcluir.toLowerCase())
        )
      );
    });
  }
}