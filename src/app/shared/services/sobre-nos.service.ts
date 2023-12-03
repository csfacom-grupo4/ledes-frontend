import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { SobreNos } from '../interfaces/sobre-nos'; // Alterado de TipoProjeto para SobreNos
import { Path } from './path';

@Injectable({
  providedIn: 'root',
})
export class SobreNosService {
  //SOBRE_NOS = 'http://18.220.17.233:2077/api/configuracao-sobre-nos'; 
  
  // Alterado de TIPO_PROJETOS para SOBRE_NOS

  CONST_API_URL = new Path().URL_API;
  SOBRE_NOS = this.CONST_API_URL + '/configuracao-sobre-nos';

  constructor(private http: HttpClient) {}

  listarSobreNos(): Observable<SobreNos[]> { // Alterado de listarTiposProjeto para listarSobreNos
    return this.http.get<any>(`${this.SOBRE_NOS}/view`).pipe(
      map((response) => {
        if (response && response.data) {
          return response.data as SobreNos[]; // Alterado de TipoProjeto[] para SobreNos[]
        } else {
          console.error(
            'Resposta do backend não possui a propriedade "data".',
            response
          );
          return [];
        }
      }),
      catchError((error) => {
        console.error('Erro ao obter os dados de sobre-nos :', error);
        throw error;
      })
    );
  }

  verSobreNos(id: number): Observable<SobreNos> { // Alterado de verTipoProjeto para verSobreNos
    return this.http.get<SobreNos>(`${this.SOBRE_NOS}/view`); // Alterado de TipoProjeto para SobreNos
  }

  

  editarSobreNos(id: number, nome: string): Observable<SobreNos> { // Alterado de editarTipoProjeto para editarSobreNos
    return this.http.patch<SobreNos>( // Alterado de TipoProjeto para SobreNos
      `${this.SOBRE_NOS}/edit/${id}`,
      nome
    );
  }

  
}
