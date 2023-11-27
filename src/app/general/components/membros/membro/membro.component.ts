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
         projetos:[{id:1, foto:null, titulo: 'Projeto de teste', coordenador: 'Prof. Ricardo Kondo'}, {id:3, foto:null, titulo: 'Projeto de desenvolvimento de software sobre algum tema', coordenador: 'Prof. Ricardo Kondo'},{id:4, foto:null, titulo: 'Projeto de desenvolvimento de software sobre algum tema', coordenador: 'Prof. Ricardo Kondo'} ]
      };


      });
  }

}

