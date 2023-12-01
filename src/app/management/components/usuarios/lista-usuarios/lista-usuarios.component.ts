import { AuthService } from './../../../../shared/services/auth.service';
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

  ngOnInit() {}

  constructor(private router: Router, private authService: AuthService) {}

  navigate() {
    this.router.navigate(['management/cadastrar-usuario']);
  }
}
