import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
})
export class ListaUsuariosComponent {
  usuarios = [
    'Tony Stark',
    'Steve Rogers',
    'Thor Odinson',
    'Bruce Banner',
    'Natasha Romanoff',
    'Clint Barton',
    'Peter Parker',
    "T'Challa",
    'Carol Danvers',
    'Wanda Maximoff',
    'Stephen Strange',
    'Scott Lang',
    'Peter Quill',
    'Gamora',
    'Rocket Raccoon',
    'Groot',
    'Drax',
    'Loki Laufeyson',
    'Nebulosa',
    'Karl Mordo',
  ];

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['management/cadastrar-usuario']);
  }
}
