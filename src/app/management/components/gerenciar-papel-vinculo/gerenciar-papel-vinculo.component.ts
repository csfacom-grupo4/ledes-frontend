import { PapeisService } from './../../../shared/services/papeis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerenciar-papel-vinculo',
  templateUrl: './gerenciar-papel-vinculo.component.html',
  styleUrls: ['./gerenciar-papel-vinculo.component.scss'],
})
export class GerenciarPapelVinculoComponent implements OnInit {
  handleFormSubmit(data: string) {
    // Aqui você pode lidar com os dados enviados pelo formulário
    console.log('Dados enviados:', data);
  }

  vinculos = ['estagiário', 'extensão'];
  papeis = ['desenvolvedor', 'gerente de projetos'];
  constructor(private router: Router, private papeisService: PapeisService) {}

  ngOnInit() {
    this.papeisService.listarPapeis().subscribe({});
  }

  navigate() {
    this.router.navigate(['/management/gerenciar-papeis-e-vinculos']);
  }
}
