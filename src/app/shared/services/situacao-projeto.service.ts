import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { SituacaoProjeto } from '../interfaces/situacao-projeto';
import { Path } from './path';

@Injectable({
  providedIn: 'root',
})
export class SituacaoProjetoService {
 // SITUACAO_PROJETO = 'http://18.220.17.233:2077/api/tipo-situacoes-projetos';

  CONST_API_URL = new Path().URL_API;
  SITUACAO_PROJETO = this.CONST_API_URL + '/tipo-situacoes-projetos';

  constructor(private http: HttpClient) {}

  listarSituacoesProjeto(): Observable<SituacaoProjeto[]> {
    return this.http.get<any>(`${this.SITUACAO_PROJETO}/list`).pipe(
      map((response) => {
        if (response && response.data) {
          return response.data as SituacaoProjeto[];
        } else {
          console.error(
            'Resposta do backend não possui a propriedade "data".',
            response
          );
          return [];
        }
      }),
      catchError((error) => {
        console.error('Erro ao obter as situações de projeto:', error);
        throw error;
      })
    );
  }

  verSituacaoProjeto(id: number): Observable<SituacaoProjeto> {
    return this.http.get<SituacaoProjeto>(
      `${this.SITUACAO_PROJETO}/view/${id}`
    );
  }

  criarSituacaoProjeto(nome: string): Observable<SituacaoProjeto> {
    return this.http.post<SituacaoProjeto>(`${this.SITUACAO_PROJETO}/add`, {
      nome: nome,
    });
  }

  editarSituacaoProjeto(id: number, nome: string): Observable<SituacaoProjeto> {
    return this.http.patch<SituacaoProjeto>(
      `${this.SITUACAO_PROJETO}/edit/${id}`,
      nome
    );
  }

  deletarSituacaoProjeto(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.SITUACAO_PROJETO}/delete/${id}`, {
      withCredentials: true,
    });
  }
}
