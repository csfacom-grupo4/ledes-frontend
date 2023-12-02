import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-view-info-laboratorio',
  templateUrl: './view-info-laboratorio.component.html',
  styleUrls: ['./view-info-laboratorio.component.scss']
})
export class ViewInfoLaboratorioComponent implements OnInit {
  @Input() sobreNos: any;
  coordenador1?: string;

  constructor(private router: Router, private coordenadorService: UsuarioService) {}

  ngOnInit() {
    this.coordenadorService.listarUsuarios().subscribe({
      next: (usuarios) => {
        // Atribuindo o nome do primeiro usuário (ajuste conforme necessário)
        if (usuarios && usuarios.length > 0) {
          this.coordenador1 = usuarios[0].nome; // Supondo que o objeto usuário tenha uma propriedade 'nome'
        }
      },
      error: (erro) => {
        console.error('Erro ao listar usuários:', erro);
      }
    });
  }
}
