import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-button-noticia',
  templateUrl: './circle-button-noticia.component.html',
  styleUrls: ['./circle-button-noticia.component.scss']
})
export class CircleButtonNoticiaComponent {
  // @Input({ required: true }) action!: 'edit' | 'delete';
  @Input() action!: 'edit' | 'delete' | 'update' | 'updateWithCurrentDate';
  @Input() id!: number; // Passando o ID como Input

  constructor() {}

  executeAction() {
    switch (this.action) {
      case 'edit':
        this.editItem(this.id);
        break;
      case 'delete':
        this.deleteItem(this.id);
        break;
      case 'update':
        this.updateItem(this.id);
        break;
      case 'updateWithCurrentDate':
        this.updateWithCurrentDate(this.id);
        break;
      default:
        break;
    }
  }

  editItem(id: number) {
    // Implemente a lógica para editar o item aqui
    console.log('Editar item com ID:', id);
  }

  deleteItem(id: number) {
    // Implemente a lógica para deletar o item aqui
    console.log('Deletar item com ID:', id);
  }

  updateItem(id: number) {
    // Implemente a lógica para atualizar o item com a data digitada pelo usuário aqui
    console.log('Atualizar item com ID e data:', id);
  }

  updateWithCurrentDate(id: number) {
    // Implemente a lógica para atualizar o item com a data atual aqui
    console.log('Atualizar item com ID e data atual:', id);
  }
}
