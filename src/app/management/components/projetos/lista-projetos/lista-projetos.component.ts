import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.scss'],
})
export class ListaProjetosComponent {
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
    this.router.navigate(['management/cadastrar-projeto']);
  }
}
