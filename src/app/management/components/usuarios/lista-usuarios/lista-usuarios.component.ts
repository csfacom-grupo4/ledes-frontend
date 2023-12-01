import { Usuario } from './../../../../shared/interfaces/usuario';
import { UsuarioService } from './../../../../shared/services/usuario.service';
import { AuthService } from './../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
})
export class ListaUsuariosComponent implements OnInit {
  // usuarios = [
  //   'Tony Stark',
  //   'Steve Rogers',
  //   'Thor Odinson',
  //   'Bruce Banner',
  //   'Natasha Romanoff',
  //   'Clint Barton',
  //   'Peter Parker',
  //   "T'Challa",
  //   'Carol Danvers',
  //   'Wanda Maximoff',
  //   'Stephen Strange',
  //   'Scott Lang',
  //   'Peter Quill',
  //   'Gamora',
  //   'Rocket Raccoon',
  //   'Groot',
  //   'Drax',
  //   'Loki Laufeyson',
  //   'Nebulosa',
  //   'Karl Mordo',
  // ];
  usuarios!: Usuario[];

  ngOnInit() {
    this.usuarioService.listarUsuarios().subscribe({
      next: (usuarios) => (this.usuarios = usuarios),
    });
  }

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  navigate() {
    this.router.navigate(['management/cadastrar-usuario']);
  }
}
