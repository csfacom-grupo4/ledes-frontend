import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.scss'],
})
export class CadastroProjetoComponent {
  imagemProjeto: string | ArrayBuffer | null = null;

  membros = [
    'Tony Stark',
    'Steve Rogers',
    'Thor Odinson',
    'Bruce Banner',
    'Natasha Romanoff',
    'Clint Barton',
  ];

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemProjeto = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
