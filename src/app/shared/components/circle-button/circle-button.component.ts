import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
})
export class CircleButtonComponent {
 // @Input({ required: true }) action!: 'edit' | 'delete';
  @Input() action!: 'edit' | 'delete';
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

 
}
