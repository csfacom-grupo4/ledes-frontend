import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.scss'],
})
export class ListaNoticiasComponent {
  projetos = [
    'Projeto Armadura Dourada',
    'Projeto Infinito',
    'Projeto O Massacre',
    'Projeto Planeta Hulk',
    'Projeto Guerra Civil',
    'Projeto A Queda de Murdock',
    'Projeto Guerra Infinita',
    'Projeto Guerra Secreta',
    'Projeto Reinado Sombrio',
    'Projeto Dinastia M',
    'Projeto Cerco',
    'Projeto A Noite Mais Densa',
    'Projeto Aniquilação',
    'Projeto Império Secreto',
    'Projeto Reino do Amanhã',
    'Projeto A Era de Apocalipse',
    'Projeto Guerra Kree-Skrull',
    'Projeto Operação: Insurgência',
    'Projeto Planeta Solitário',
    'Projeto Dizimação',
  ];

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['management/cadastrar-noticia']);
  }
}
