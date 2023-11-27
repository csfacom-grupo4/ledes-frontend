import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.scss']
})
export class MembroComponent implements OnInit {
  id: any | null = null;
  membro: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.membro =
        { id: 1, nome: 'João', sobrenome: 'José da Silva',  vinculo: 'Bolsista', curso: 'Engenharia de Software',
         email: 'jjsilva@ufms.br',
         coordenador: 'Prof. Ricardo Kondo', situacao: 'EM ANDAMENTO', tipo: 'EXTENSÃO', imagem: '',
      membros:[{id:1, nome:'Tiago', tipo_papel: 'Eng de Software', foto: null}, {id:2, nome:'Vitor', tipo_papel: 'Eng de Software', foto: null},{id:2, nome:'Joao', tipo_papel: 'Eng de Software', foto: null} ]
      };


      });
  }

}

