import { UsuarioService } from './../../../../shared/services/usuario.service';
import { Usuario } from './../../../../shared/interfaces/usuario';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.scss'],
})
export class MembroComponent implements OnInit {
  id!: any | null;
  membro!: Usuario;

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      // this.membro =
      //   { id: 1, nome: 'João', sobrenome: 'José da Silva',  vinculo: 'Bolsista', curso: 'Engenharia de Software',
      //    email: 'jjsilva@ufms.br',
      //    projetos:[{id:1, foto:null, titulo: 'Projeto de teste', coordenador: 'Prof. Ricardo Kondo', inicio: '01/01/2023', fim: 'agora', vinculo: 'Bolsista'}, {id:3, foto:null, titulo: 'Projeto de desenvolvimento de software sobre algum tema', coordenador: 'Prof. Ricardo Kondo', inicio: '01/01/2023', fim: '06/08/2023',vinculo: 'Bolsista'},{id:4, foto:null, titulo: 'Projeto de desenvolvimento de software sobre algum tema', coordenador: 'Prof. Ricardo Kondo', inicio: '01/06/2022', fim: '12/12/2022', vinculo: 'Voluntário'} ]
      // };
    });
    this.usuariosService.verUsuario(this.id).subscribe({
      next: (membro) => {
        (this.membro = membro), console.log(this.membro);
      },
    });
  }
}
