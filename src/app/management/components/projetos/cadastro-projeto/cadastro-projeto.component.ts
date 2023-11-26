import { Component} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.scss'],
})
export class CadastroProjetoComponent   {
  conteudo: string = ''; // Conteúdo do editor

  htmlContent=this.conteudo;
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '15rem',
      minHeight: '15rem',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'no',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Insira o texto...',
      defaultParagraphSeparator: 'p',
      defaultFontName: 'Arial',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
     /* customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],*/
    uploadUrl: 'v1/image',
   /* upload: (file: File) => {
      // Implemente a lógica para enviar o arquivo para o servidor aqui
      // Por exemplo, você pode usar um serviço HTTP para enviar o arquivo para uma rota específica no backend
      this.seuServicoHttp.enviarArquivoParaServidor(file).subscribe(
        response => {
          console.log('Arquivo enviado com sucesso:', response);
          // Faça algo com a resposta do servidor, se necessário
        },
        error => {
          console.error('Erro ao enviar arquivo:', error);
          // Lide com o erro, se necessário
        }
      );
    },*/
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};
  
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
