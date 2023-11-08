import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent implements OnInit {
  id: any | null = null;
  projeto: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Obtendo o ID da rota
      // Agora você pode usar esse ID para solicitar os dados do backend
      console.log(this.id);
      this.projeto = 
        { id: 1, titulo: 'Projeto de desenvolvimento de software sobre algum tema',  data_inicio: '01/01/2023', data_termino: null,
         descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt lectus quis convallis mattis. In sed volutpat mauris. Sed aliquet quam et dolor mattis, in efficitur mauris elementum. Cras id tellus et massa suscipit varius. Nulla facilisi. Sed luctus, ante at mollis ultrices, urna erat consectetur leo, at finibus augue libero id dui. In vitae maximus mi.Integer non augue sed ex fermentum fermentum at at felis. Vivamus vehicula, ipsum vel placerat mattis, ante ante gravida nibh, ut facilisis justo ante at metus. Ut molestie nulla eu tellus vehicula, id malesuada nisi ultricies. Suspendisse ac ante fringilla tortor condimentum porttitor. Maecenas vitae ullamcorper erat, vel semper ipsum. Maecenas eu finibus purus. Phasellus sed fermentum lorem.', 
         coordenador: 'Prof. Ricardo Kondo', situacao: 'EM ANDAMENTO', tipo: 'EXTENSÃO', imagem: '', 
      membros:[{id:1, nome:'Tiago', tipo_papel: 'Eng de Software', foto: null}, {id:2, nome:'Vitor', tipo_papel: 'Eng de Software', foto: null},{id:2, nome:'Joao', tipo_papel: 'Eng de Software', foto: null} ]
      };  
   
      
      });
  }
}
