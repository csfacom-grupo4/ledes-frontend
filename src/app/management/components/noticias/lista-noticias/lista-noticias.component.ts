import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/shared/interfaces/noticia';
import { NoticiasService } from 'src/app/shared/services/noticias.service';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.scss'],
})
export class ListaNoticiasComponent implements OnInit{
 /* noticias = [
    {
      "id": 1,
      "capa": 'https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3007&q=80',
      "thumbnail": 'https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3007&q=80',
      "titulo":  'Galactus Retorna para Devorar a Terra!',
      "corpo": "Notícia A sobre Tal Coisa",
      "autor": {
        "id": 1,
        "nome": "Admin",
        "sobrenome": null,
        "linkedin": null,
        "github": null,
        "curso": null,
        "funcao": 0,
        "foto": null
      },
      "destaque": true,
      "dataAgendamento": "2023-01-12T00:00:00.000Z",
      "visibilidade": 1
    },
    {
      "id": 2,
      "capa": 'https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3007&q=80',
      "thumbnail": 'https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3007&q=80',
      "titulo":  'Capitã Marvel Encara um Inimigo do Passado',
      "corpo": "Notícia A sobre Tal Coisa",
      "autor": {
        "id": 1,
        "nome": "Admin",
        "sobrenome": null,
        "linkedin": null,
        "github": null,
        "curso": null,
        "funcao": 0,
        "foto": null
      },
      "destaque": true,
      "dataAgendamento": "2023-01-12T00:00:00.000Z",
      "visibilidade": 1
    }
  ];*/
  /*constructor(private apiService: ApiService) {
    this.loadData();
  }
*/
noticias!: Noticia[];
  loadData() {
    /*this.apiService.getNoticias().subscribe((data: any[]) => {
      this.noticias = data;
    });*/
  }

  ngOnInit() {
    this.noticiasService.listarNoticias().subscribe({
      next: (noticias) => (this.noticias = noticias),
    });
  }

  constructor(private router: Router,  private noticiasService: NoticiasService) {}

  navigate() {
    this.router.navigate(['management/cadastrar-noticia']);
  }
}
