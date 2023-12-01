import { UsuarioService } from './../../../shared/services/usuario.service';
import { Usuario } from './../../../shared/interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.scss'],
})
export class MembrosComponent implements OnInit {
  // membros = [
  //   { id: 1, nome: 'Tiago', tipo_papel: 'Eng de Software', foto: null },
  //   { id: 2, nome: 'Vitor', tipo_papel: 'Eng de Software', foto: null },
  //   { id: 3, nome: 'Joao', tipo_papel: 'Eng de Software', foto: null },
  //   { id: 4, nome: 'Vitor', tipo_papel: 'Eng de Software', foto: null },
  //   { id: 5, nome: 'Joao', tipo_papel: 'Eng de Software', foto: null },
  // ];
  membros!: Usuario[];

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe({
      next: (membros) => {
        this.membros = membros;
      },
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/general/membros', id]);
  }
}
