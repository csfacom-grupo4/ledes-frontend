import { Projeto } from './../../../../shared/interfaces/projeto';
import { ProjetoService } from './../../../../shared/services/projeto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.scss'],
})
export class ListaProjetosComponent implements OnInit {
  // projetos = [
  //   'Projeto Armadura Dourada',
  //   'Projeto Infinito',
  //   'Projeto O Massacre',
  //   'Projeto Planeta Hulk',
  //   'Projeto Guerra Civil',
  //   'Projeto A Queda de Murdock',
  //   'Projeto Guerra Infinita',
  //   'Projeto Guerra Secreta',
  //   'Projeto Reinado Sombrio',
  //   'Projeto Dinastia M',
  //   'Projeto Cerco',
  //   'Projeto A Noite Mais Densa',
  //   'Projeto Aniquilação',
  //   'Projeto Império Secreto',
  //   'Projeto Reino do Amanhã',
  //   'Projeto A Era de Apocalipse',
  //   'Projeto Guerra Kree-Skrull',
  //   'Projeto Operação: Insurgência',
  //   'Projeto Planeta Solitário',
  //   'Projeto Dizimação',
  // ];
  projetos!: Projeto[];

  constructor(private router: Router, private projetoService: ProjetoService) {}

  ngOnInit(): void {
    this.projetoService.listarProjetos().subscribe({
      next: (projetos) => (this.projetos = projetos),
    });
  }

  navigate() {
    this.router.navigate(['management/cadastrar-projeto']);
  }
}
