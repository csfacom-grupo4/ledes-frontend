import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { TipoProjeto } from '../interfaces/tipo-projeto';

@Injectable({
  providedIn: 'root',
})
export class TipoProjetoService {
  TIPO_PROJETOS = 'http://18.220.17.233:2077/api/tipo-projetos';

  constructor(private http: HttpClient) {}

  listarTiposProjeto(): Observable<TipoProjeto[]> {
    return this.http.get<any>(`${this.TIPO_PROJETOS}/list`).pipe(
      map((response) => {
        if (response && response.data) {
          return response.data as TipoProjeto[];
        } else {
          console.error(
            'Resposta do backend não possui a propriedade "data".',
            response
          );
          return [];
        }
      }),
      catchError((error) => {
        console.error('Erro ao obter os papéis:', error);
        throw error;
      })
    );
  }

  verTipoProjeto(id: number): Observable<TipoProjeto> {
    return this.http.get<TipoProjeto>(`${this.TIPO_PROJETOS}/view/${id}`);
  }

  criarTipoProjeto(nome: string): Observable<TipoProjeto> {
    return this.http.post<TipoProjeto>(`${this.TIPO_PROJETOS}/add`, {
      nome: nome,
    });
  }

  editarTipoProjeto(id: number, nome: string): Observable<TipoProjeto> {
    return this.http.patch<TipoProjeto>(
      `${this.TIPO_PROJETOS}/edit/${id}`,
      nome
    );
  }

  deletarTipoProjeto(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.TIPO_PROJETOS}/delete/${id}`, {
      withCredentials: true,
    });
  }
}
