import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-card-noticia',
  templateUrl: './list-card-noticia.component.html',
  styleUrls: ['./list-card-noticia.component.scss']
})
export class ListCardNoticiaComponent {
  @Input() noticia!: any;
  constructor(private router: Router /*, private apiService: ApiService*/) {}

  redirect(id: number) {
    this.router.navigate(['/detalhes', id]); // Redireciona para uma rota específica com o ID
  }

  deleteItem(id: number) {
  //  this.apiService.deleteNoticia(id).subscribe(() => {
      // Lógica após a exclusão do item (pode atualizar a lista de notícias, por exemplo)
  //  });
  }

  updateItem(noticia: any) {
    if (noticia.dataAgendamento) {
   //   this.apiService.updateNoticia(noticia).subscribe(() => {
        // Lógica após a atualização do item (pode atualizar a lista de notícias, por exemplo)
    //  });
    } else {
      alert('Por favor, insira uma data válida!');
    }
  }

  updateWithCurrentDate(noticia: any) {
    noticia.dataAgendamento = new Date().toISOString();
   // this.apiService.updateNoticia(noticia).subscribe(() => {
      // Lógica após a atualização do item com a data atual (pode atualizar a lista de notícias, por exemplo)
   // });
  }
}


