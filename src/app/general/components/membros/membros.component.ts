import { Component } from '@angular/core';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.scss']
})
export class MembrosComponent {
  
membros = 
      [{id:1, nome:'Tiago', tipo_papel: 'Eng de Software', foto: null}, 
      {id:2, nome:'Vitor', tipo_papel: 'Eng de Software', foto: null},
      {id:3, nome:'Joao', tipo_papel: 'Eng de Software', foto: null},
      {id:4, nome:'Vitor', tipo_papel: 'Eng de Software', foto: null},
      {id:5, nome:'Joao', tipo_papel: 'Eng de Software', foto: null}];  
 
    
  

}
