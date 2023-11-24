import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.scss'],
})
export class ListaNoticiasComponent {
  projetos = [
    'Galactus Retorna para Devorar a Terra!',
    'Os Vingadores Enfrentam uma Nova Ameaça Cósmica',
    'Doutor Estranho Desvenda um Novo Reino Místico',
    'Loki Trai Novamente e Desencadeia o Caos',
    'Os X-Men Lutam contra uma Mutação Descontrolada',
    'Capitã Marvel Encara um Inimigo do Passado',
    'Pantera Negra Assume o Controle de Wakanda',
    'Hulk Enfrenta uma Transformação Incontrolável',
    'O Surgimento de um Novo Vilão: O Conquistador Temporal',
    'Os Guardiões da Galáxia em uma Missão Interplanetária',
    'Homem-Aranha Enfrenta um Enigma no Submundo de Nova York',
    'Wanda Maximoff Explora seus Poderes Dimensionais',
  ];

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['management/cadastrar-noticia']);
  }
}
